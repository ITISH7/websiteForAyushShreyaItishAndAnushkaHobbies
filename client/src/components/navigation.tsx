import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-cream/90 backdrop-blur-md shadow-sm transform translate-y-0" 
        : "bg-cream/90 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-primary-brown">Artisan Canvas</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-primary-brown transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-primary-brown transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-charcoal hover:text-primary-brown transition-colors duration-300 font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-charcoal hover:text-primary-brown transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-charcoal hover:text-primary-brown transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-primary-brown"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-charcoal hover:text-primary-brown w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-charcoal hover:text-primary-brown w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="block px-3 py-2 text-charcoal hover:text-primary-brown w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-charcoal hover:text-primary-brown w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-charcoal hover:text-primary-brown w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
