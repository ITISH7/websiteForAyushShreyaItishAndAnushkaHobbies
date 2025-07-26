import { Brush, Scissors, User, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: <Brush className="h-10 w-10" />,
      title: "Painting Workshops",
      description: "Master various painting techniques from watercolor to oil painting. Our expert instructors guide you through color theory, composition, and personal style development.",
      features: ["Watercolor & Acrylic", "Oil Painting", "Digital Art"]
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Craft Classes",
      description: "Explore traditional and contemporary crafting techniques. From pottery to jewelry making, discover the joy of creating beautiful, functional art pieces.",
      features: ["Pottery & Ceramics", "Jewelry Making", "Textile Arts"]
    },
    {
      icon: <User className="h-10 w-10" />,
      title: "Private Sessions",
      description: "Personalized one-on-one instruction tailored to your artistic goals. Perfect for focused skill development or exploring specific techniques in depth.",
      features: ["Personalized Curriculum", "Flexible Scheduling", "Expert Mentorship"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown mb-4">
            Our Creative Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From beginner-friendly sessions to advanced masterclasses, find the perfect creative journey for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-accent-orange mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-brown mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-nature-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary-brown hover:bg-primary-brown/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
