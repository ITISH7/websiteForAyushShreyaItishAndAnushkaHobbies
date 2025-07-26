import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaPinterest, FaYoutube } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your message.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown mb-6">
              Start Your Creative Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to unleash your artistic potential? Get in touch with us to learn more about our workshops, schedule a visit, or ask any questions about our programs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-accent-orange text-white p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Studio Location</div>
                  <div className="text-gray-600">123 Art Street, Creative District, CA 90210</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent-orange text-white p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent-orange text-white p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <div className="text-gray-600">hello@artisancanvas.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent-orange text-white p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Studio Hours</div>
                  <div className="text-gray-600">Mon-Fri: 9AM-8PM | Sat-Sun: 10AM-6PM</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="font-semibold text-lg mb-4">Follow Us</div>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-brown text-white p-3 rounded-full hover:bg-primary-brown/90 transition-colors duration-300">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-brown text-white p-3 rounded-full hover:bg-primary-brown/90 transition-colors duration-300">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-brown text-white p-3 rounded-full hover:bg-primary-brown/90 transition-colors duration-300">
                  <FaPinterest className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-brown text-white p-3 rounded-full hover:bg-primary-brown/90 transition-colors duration-300">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-cream p-8 rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <h3 className="font-serif text-2xl font-bold text-primary-brown mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-semibold text-charcoal mb-2">First Name</Label>
                    <Input 
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-semibold text-charcoal mb-2">Last Name</Label>
                    <Input 
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="block text-sm font-semibold text-charcoal mb-2">Email</Label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Label className="block text-sm font-semibold text-charcoal mb-2">Interest</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-colors duration-300">
                      <SelectValue placeholder="Select a workshop type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="painting-workshops">Painting Workshops</SelectItem>
                      <SelectItem value="craft-classes">Craft Classes</SelectItem>
                      <SelectItem value="private-sessions">Private Sessions</SelectItem>
                      <SelectItem value="group-events">Group Events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="block text-sm font-semibold text-charcoal mb-2">Message</Label>
                  <Textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your artistic goals or any questions you have..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={submitContactForm.isPending}
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {submitContactForm.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
