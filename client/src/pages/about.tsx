import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Users, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Sarah Martinez",
      role: "Founder & Lead Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "With 15 years of experience in fine arts, Sarah founded Artisan Canvas to create a nurturing environment for creative expression.",
      specialties: ["Watercolor", "Oil Painting", "Art Theory"]
    },
    {
      name: "Michael Chen",
      role: "Pottery & Ceramics Instructor", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Michael brings traditional pottery techniques from his studies in Japan, combined with contemporary ceramic artistry.",
      specialties: ["Wheel Throwing", "Glazing", "Sculpture"]
    },
    {
      name: "Emma Rodriguez",
      role: "Craft & Mixed Media Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400", 
      bio: "Emma's passion for sustainable crafting and upcycling inspires students to create beautiful art from unexpected materials.",
      specialties: ["Jewelry Making", "Textile Arts", "Mixed Media"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Studio",
      description: "Recognized as 'Best Art Studio' by Creative Arts Magazine 2023"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Impact",
      description: "Over 500 students have discovered their artistic passion with us"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "12 Years Strong",
      description: "Serving the creative community since 2012 with dedication"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Central Location",
      description: "Located in the heart of the Creative District for easy access"
    }
  ];

  return (
    <div className="font-sans bg-cream text-charcoal min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-brown mb-6">
              About Artisan Canvas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that creativity lives within everyone, Artisan Canvas has been nurturing 
              artistic expression for over a decade. Our mission is to provide a welcoming space where 
              artists of all levels can explore, learn, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary-brown mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Artisan Canvas began as a small dream in 2012 when founder Sarah Martinez 
                  transformed an old warehouse into a vibrant creative sanctuary. What started 
                  as weekend painting sessions with friends has blossomed into a thriving 
                  community hub for artistic exploration.
                </p>
                <p>
                  Today, we offer comprehensive workshops ranging from traditional painting 
                  techniques to contemporary mixed media arts. Our philosophy centers on 
                  personalized instruction, sustainable practices, and fostering a supportive 
                  community where creativity can flourish without judgment.
                </p>
                <p>
                  Every brush stroke, every pottery piece, and every crafted creation tells 
                  a story. We're honored to be part of each student's unique artistic journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Art studio interior with paintings and easels"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-orange text-white p-6 rounded-2xl shadow-lg">
                <div className="font-bold text-2xl">2012</div>
                <div className="font-medium">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-brown mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to artistic excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 bg-cream hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-accent-orange mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-primary-brown mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-brown mb-4">
              Meet Our Instructors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate artists and dedicated teachers who guide your creative journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-brown mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-orange font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-charcoal">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="bg-cream text-primary-brown px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-brown mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Artisan Canvas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-brown mb-4">
                Community First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe art is best created and appreciated in community. Our studio 
                fosters connections between artists, creating lasting friendships and 
                collaborative opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nature-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-brown mb-4">
                Excellence in Teaching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our instructors are not just skilled artists but passionate educators 
                who adapt their teaching to each student's learning style and artistic goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-brown mb-4">
                Sustainable Practice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to environmentally conscious art-making, using sustainable 
                materials and teaching techniques that respect both creativity and our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}