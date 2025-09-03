import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps Adventure",
    location: "Interlaken, Switzerland",
    duration: "7 Days",
    rating: 4.9,
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Experience breathtaking mountain views, pristine lakes, and charming alpine villages.",
    featured: true
  },
  {
    id: 2,
    name: "Bali Wellness Retreat",
    location: "Ubud, Indonesia",
    duration: "5 Days", 
    rating: 4.8,
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    description: "Rejuvenate your mind and body in tropical paradise with yoga and spa treatments."
  },
  {
    id: 3,
    name: "Northern Lights Quest",
    location: "Reykjavik, Iceland",
    duration: "4 Days",
    rating: 4.7,
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    description: "Chase the magical Aurora Borealis across Iceland's stunning landscapes."
  },
  {
    id: 4,
    name: "Safari Adventure",
    location: "Serengeti, Tanzania",
    duration: "8 Days",
    rating: 4.9,
    price: "$3,299",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
    description: "Witness the Great Migration and encounter Africa's magnificent wildlife."
  },
  {
    id: 5,
    name: "Ancient Wonders Tour",
    location: "Kyoto, Japan",
    duration: "6 Days",
    rating: 4.8,
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    description: "Immerse yourself in traditional Japanese culture and ancient temples."
  },
  {
    id: 6,
    name: "Patagonia Expedition",
    location: "Torres del Paine, Chile",
    duration: "10 Days",
    rating: 4.9,
    price: "$3,799",
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
    description: "Explore dramatic landscapes, glaciers, and pristine wilderness."
  }
];

const DestinationsSection = () => {
  return (
    <section className="py-24 px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked experiences that will create memories to last a lifetime
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id}
              className={`group relative overflow-hidden curved-2xl hover-lift glass-card transition-all duration-500 ${
                destination.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              
              {/* Content */}
              <div className={`relative z-10 p-8 h-full flex flex-col justify-end ${
                destination.featured ? 'min-h-[500px]' : 'min-h-[400px]'
              }`}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  
                  <h3 className={`font-bold text-white mb-2 ${
                    destination.featured ? 'text-3xl' : 'text-xl'
                  }`}>
                    {destination.name}
                  </h3>
                  
                  <p className="text-white/80 mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{destination.rating}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span className="text-white/80 text-sm">{destination.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-white/60">From</div>
                    <div className="text-2xl font-bold text-secondary">{destination.price}</div>
                  </div>
                </div>
                
                <Button 
                  variant="glass" 
                  className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  Explore Package
                </Button>
              </div>
              
              {/* Floating Badge for Featured */}
              {destination.featured && (
                <div className="absolute top-6 right-6 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold animate-glow">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cta" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;