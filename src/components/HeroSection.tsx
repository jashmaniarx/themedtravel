import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="glass-card p-12 curved-2xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-slide-up">
            Discover Your
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Next Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
            Experience breathtaking destinations with our curated travel packages. 
            From serene mountain retreats to vibrant city escapes, your perfect journey awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up [animation-delay:400ms]">
            <Button variant="hero" size="xl" className="min-w-48" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>
              <MapPin className="mr-2 h-5 w-5" />
              Explore Destinations
            </Button>
            
            <Button variant="glass" size="xl" className="min-w-48" onClick={() => window.open('https://youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
              <Play className="mr-2 h-5 w-5" />
              Watch Experience
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="animate-float">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div className="animate-float [animation-delay:1s]">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div className="animate-float [animation-delay:2s]">
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/20 animate-float [animation-delay:3s] hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-accent/30 animate-float [animation-delay:4s] hidden lg:block" />
      <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-primary/20 animate-float [animation-delay:5s] hidden lg:block" />
    </section>
  );
};

export default HeroSection;