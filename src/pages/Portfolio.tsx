import Header from "@/layout/header";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import ServicesSection from "@/sections/ServiceSection";
// import StatsSection from "@/sections/StatsSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        {/* <StatsSection /> */}
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;
