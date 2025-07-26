import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "The watercolor workshop completely transformed my understanding of color and technique. The instructors are incredibly patient and knowledgeable.",
      name: "Sarah Mitchell",
      role: "Watercolor Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "I never thought I could create something so beautiful with my own hands. The pottery classes have been a therapeutic and rewarding experience.",
      name: "Michael Chen",
      role: "Pottery Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "The private sessions allowed me to develop my own artistic style. The personalized attention made all the difference in my creative journey.",
      name: "Emma Rodriguez",
      role: "Private Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown mb-4">
            What Our Artists Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="text-accent-orange text-lg flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
