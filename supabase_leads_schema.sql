-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'download_gate',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (we want free users to be able to submit their email)
CREATE POLICY "Anyone can insert leads" 
    ON public.leads 
    FOR INSERT 
    WITH CHECK (true);

-- Allow anyone to view for now or restrict to authenticated admin
CREATE POLICY "Anyone can view leads"
    ON public.leads
    FOR SELECT
    USING (true);
