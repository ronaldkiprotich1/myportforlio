import Header from "@/layout/header";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import ServicesSection from "@/sections/ServiceSection";
import SkillsSection from "@/sections/SkillsSection";
import TimelineSection from "@/sections/TimelineSection";
import ScrollProgress from "@/components/ScrollProgress";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Scroll progress bar — sits at very top of page */}
      <ScrollProgress />

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <TimelineSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;