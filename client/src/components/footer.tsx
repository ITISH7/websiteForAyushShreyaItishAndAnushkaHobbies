import { FaInstagram, FaFacebookF, FaPinterest, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-accent-orange mb-4">Artisan Canvas</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Nurturing creativity and artistic expression through hands-on workshops, expert instruction, and a supportive community of artists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                <FaPinterest className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors duration-300">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent-orange transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-accent-orange transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-accent-orange transition-colors duration-300"
                >
                  Workshops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-accent-orange transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent-orange transition-colors duration-300">Painting Classes</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors duration-300">Craft Workshops</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors duration-300">Private Lessons</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors duration-300">Group Events</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Artisan Canvas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-accent-orange text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-accent-orange text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
