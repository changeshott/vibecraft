-- Create enum for vibe status
CREATE TYPE vibe_status AS ENUM ('pending', 'approved', 'rejected');

-- Create community vibes table
CREATE TABLE IF NOT EXISTS public.community_vibes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    short_description TEXT NOT NULL,
    definition_json JSONB NOT NULL,
    status vibe_status DEFAULT 'pending'::vibe_status,
    upvotes_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create community vibe votes table (to prevent double voting)
CREATE TABLE IF NOT EXISTS public.community_vibe_votes (
    vibe_id UUID NOT NULL REFERENCES public.community_vibes(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (vibe_id, user_id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.community_vibes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_vibe_votes ENABLE ROW LEVEL SECURITY;

-- Policies for community_vibes
-- Anyone can view approved vibes
CREATE POLICY "Anyone can view approved vibes" 
    ON public.community_vibes 
    FOR SELECT 
    USING (status = 'approved');

-- Users can view their own vibes regardless of status
CREATE POLICY "Users can view own vibes" 
    ON public.community_vibes 
    FOR SELECT 
    USING (auth.uid() = user_id);

-- Authenticated users (we will check Pro tier in API) can insert vibes
CREATE POLICY "Authenticated users can insert vibes" 
    ON public.community_vibes 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Policies for community_vibe_votes
-- Anyone can read votes
CREATE POLICY "Anyone can read votes" 
    ON public.community_vibe_votes 
    FOR SELECT 
    USING (true);

-- Authenticated users can vote
CREATE POLICY "Authenticated users can vote" 
    ON public.community_vibe_votes 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Authenticated users can unvote
CREATE POLICY "Authenticated users can unvote" 
    ON public.community_vibe_votes 
    FOR DELETE 
    USING (auth.uid() = user_id);

-- Function to handle upvote increment/decrement automatically
CREATE OR REPLACE FUNCTION handle_vibe_vote() 
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE public.community_vibes 
        SET upvotes_count = upvotes_count + 1 
        WHERE id = NEW.vibe_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE public.community_vibes 
        SET upvotes_count = upvotes_count - 1 
        WHERE id = OLD.vibe_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for votes
CREATE TRIGGER on_vibe_vote
    AFTER INSERT OR DELETE ON public.community_vibe_votes
    FOR EACH ROW EXECUTE FUNCTION handle_vibe_vote();
