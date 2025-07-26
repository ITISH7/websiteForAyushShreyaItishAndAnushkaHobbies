import { Card, CardContent } from "@/components/ui/card";

export default function GallerySection() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Watercolor Landscapes",
      category: "Advanced Workshop",
      className: "h-64"
    },
    {
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      title: "Ceramic Crafts",
      category: "Pottery Workshop",
      className: "h-80"
    },
    {
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      title: "Abstract Expression",
      category: "Acrylic Techniques",
      className: "h-80"
    },
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Jewelry Making",
      category: "Craft Workshop",
      className: "h-64"
    },
    {
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Portrait Painting",
      category: "Oil Techniques",
      className: "h-64"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      title: "Mixed Media",
      category: "Contemporary Art",
      className: "h-80"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown mb-4">
            Student Masterpieces
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness the incredible transformations and artistic growth of our community members
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image}
                alt={item.title}
                className={`w-full object-cover ${item.className}`}
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
