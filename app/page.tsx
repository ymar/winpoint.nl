import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { RealIssueSection } from "@/components/sections/real-issue-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { PrimaryFeaturesSection, SecondaryFeaturesSection } from "@/components/sections/primary-features-section"
import { CallToActionSection, FinalCTASection } from "@/components/sections/cta-sections"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <RealIssueSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <PrimaryFeaturesSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
