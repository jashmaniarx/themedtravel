import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-primary-glow to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-up">
            Ready for Your
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Next Adventure?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Don't wait for someday. Your extraordinary journey begins with a single step. 
            Join thousands of travelers who have discovered the world through our eyes.
          </p>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up [animation-delay:400ms]">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-accent hover:text-primary hover:shadow-2xl hover:shadow-white/25 hover:scale-105 min-w-64"
              onClick={() => alert('Start planning your adventure with ThemedTravel!')}
            >
              Start Planning Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl" 
              className="min-w-64 bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() => alert('Download ThemedTravel guide coming soon!')}
            >
              Download Free Guide
            </Button>
          </div>
          
          {/* Contact Options */}
          <div className="glass-card p-8 curved-2xl max-w-4xl mx-auto animate-fade-in [animation-delay:600ms]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Prefer to speak with our travel experts?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                className="flex items-center justify-center gap-3 p-6 glass-button rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                onClick={() => alert('Call ThemedTravel for personalized assistance!')}
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm text-white/80">24/7 Support</div>
                </div>
              </button>
              
              <button 
                className="flex items-center justify-center gap-3 p-6 glass-button rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                onClick={() => alert('Email ThemedTravel for detailed inquiries!')}
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm text-white/80">Quick Response</div>
                </div>
              </button>
              
              <button 
                className="flex items-center justify-center gap-3 p-6 glass-button rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                onClick={() => alert('Live chat with ThemedTravel experts!')}
              >
                <Globe className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-white/80">Available 24/7</div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 text-center animate-fade-in [animation-delay:800ms]">
            <p className="text-white/60 mb-4">Trusted by travelers worldwide</p>
            <div className="flex justify-center items-center gap-8 text-white/40">
              <div className="text-sm font-medium">ASTA Member</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-sm font-medium">IATA Certified</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-sm font-medium">Sustainable Tourism</div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-sm font-medium">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;