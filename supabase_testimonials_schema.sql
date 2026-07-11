-- Create the testimonials table
CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    avatar TEXT,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved testimonials
CREATE POLICY "Anyone can read approved testimonials" 
ON public.testimonials 
FOR SELECT 
USING (approved = TRUE);

-- Policy: Users can create their own testimonials
CREATE POLICY "Users can create testimonials" 
ON public.testimonials 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Optional: Allow users to read their own pending testimonials
CREATE POLICY "Users can read their own testimonials" 
ON public.testimonials 
FOR SELECT 
USING (auth.uid() = user_id);

-- Optional: Allow users to update their own pending testimonials
CREATE POLICY "Users can update their own pending testimonials" 
ON public.testimonials 
FOR UPDATE
USING (auth.uid() = user_id AND approved = FALSE)
WITH CHECK (auth.uid() = user_id AND approved = FALSE);
