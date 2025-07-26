import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans bg-cream text-charcoal">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
