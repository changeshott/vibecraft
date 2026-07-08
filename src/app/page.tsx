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
} from "@/components/landing/client-components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ResultShowcaseSection />
        <VibeShowcaseSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
