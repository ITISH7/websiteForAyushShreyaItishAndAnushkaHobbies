import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Where Creativity <br/>
          <span className="text-accent-orange">Comes to Life</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          Discover the art of crafting and painting in our inspiring studio. From beginner workshops to advanced techniques, unleash your creative potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToServices}
            className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Workshops
          </Button>
          <Button 
            variant="outline"
            onClick={scrollToGallery}
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            View Gallery
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
