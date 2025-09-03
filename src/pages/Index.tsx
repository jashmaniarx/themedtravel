import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DarkModeToggle />
      <HeroSection />
      <DestinationsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
