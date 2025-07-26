import { Palette } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown mb-4">
              Crafting Dreams Into Reality
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over a decade, Artisan Canvas has been a sanctuary for creative souls. Our studio combines traditional crafting techniques with modern artistic expression, providing a space where imagination flourishes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're picking up a brush for the first time or you're a seasoned artist, our expert instructors guide you through personalized learning experiences that celebrate your unique creative journey.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">12</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">50+</div>
                <div className="text-sm text-gray-600">Workshop Types</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Artist painting on canvas in bright studio" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent-orange text-white p-6 rounded-2xl shadow-lg">
              <Palette className="h-8 w-8 mb-2" />
              <div className="font-semibold">Professional Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
