import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ResumeSection />

      <ServicesSection />

      <ProjectsSection />

      <div className="section-divider" />
      <TestimonialsSection />

      <div className="section-divider" />
      <ContactSection />

      <Footer />
    </>
  );
}
