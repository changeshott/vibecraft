CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    session_id TEXT,
    event_type TEXT NOT NULL,
    step_name TEXT,
    vibe_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics events (for anonymous tracking)
CREATE POLICY "Anyone can insert analytics events" 
    ON public.analytics_events 
    FOR INSERT 
    WITH CHECK (true);
