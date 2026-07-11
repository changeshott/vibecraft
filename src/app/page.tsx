import dynamic from "next/dynamic";
import { Footer } from "@/components/shared/footer";
import { PageTracker } from "@/hooks/use-analytics";

const Navbar = dynamic(() => import("@/components/shared/navbar").then(m => m.Navbar));

const HeroSection = dynamic(() => import("@/components/landing/hero-section").then(m => m.HeroSection));
const ProblemSection = dynamic(() => import("@/components/landing/problem-section").then(m => m.ProblemSection));
const HowItWorksSection = dynamic(() => import("@/components/landing/how-it-works-section").then(m => m.HowItWorksSection));
const ResultShowcaseSection = dynamic(() => import("@/components/landing/result-showcase-section").then(m => m.ResultShowcaseSection));
const VibeShowcaseSection = dynamic(() => import("@/components/landing/vibe-showcase-section").then(m => m.VibeShowcaseSection));
const TopCommunityVibesSection = dynamic(() => import("@/components/landing/top-community-vibes-section").then(m => m.TopCommunityVibesSection));
const FeaturesSection = dynamic(() => import("@/components/landing/features-section").then(m => m.FeaturesSection));
const PricingSection = dynamic(() => import("@/components/landing/pricing-section").then(m => m.PricingSection));
const FAQSection = dynamic(() => import("@/components/landing/faq-section").then(m => m.FAQSection));
const CTASection = dynamic(() => import("@/components/landing/cta-section").then(m => m.CTASection));
const TestimonialSection = dynamic(() => import("@/components/landing/testimonial-section").then(m => m.TestimonialSection));
const FreeSampleSection = dynamic(() => import("@/components/landing/free-sample-section").then(m => m.FreeSampleSection));

import { createClient } from "@/lib/supabase/server";

export default async function LandingPage() {
  const supabase = await createClient();
  
  // Fetch up to 3 approved testimonials
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <>
      <Navbar />
      <main>
        <PageTracker stepName="landing_page" />
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ResultShowcaseSection />
        <VibeShowcaseSection />
        <TopCommunityVibesSection />
        <FeaturesSection />
        <TestimonialSection initialTestimonials={testimonials || []} />
        <FreeSampleSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
