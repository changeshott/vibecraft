import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  ResultShowcaseSection,
  VibeShowcaseSection,
  FeaturesSection,
  PricingSection,
  FAQSection,
  CTASection,
  TestimonialSection,
  FreeSampleSection,
  LiveActionDemo,
} from "@/components/landing/client-components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LiveActionDemo />
        <ProblemSection />
        <HowItWorksSection />
        <ResultShowcaseSection />
        <VibeShowcaseSection />
        <FeaturesSection />
        <TestimonialSection />
        <FreeSampleSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
