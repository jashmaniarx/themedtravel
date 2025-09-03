import { Shield, Users, Award, Compass, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel with confidence knowing our 24/7 support team and comprehensive insurance have you covered every step of the way."
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Our local guides bring destinations to life with insider knowledge, cultural insights, and personalized attention."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized globally for excellence in sustainable tourism and exceptional travel experiences."
  },
  {
    icon: Compass,
    title: "Unique Experiences",
    description: "Access exclusive locations and authentic experiences that you won't find anywhere else."
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We're committed to responsible tourism that benefits local communities and preserves natural environments."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "With partners worldwide, we ensure seamless experiences from departure to return."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Why Choose Wanderlust?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just plan trips—we craft transformative journeys that connect you with the world
          </p>
        </div>
        
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.title}
                className="group glass-card p-8 curved-2xl hover-lift transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Indicator */}
                <div className="w-full h-1 bg-gradient-to-r from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 curved-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of travelers who trust us to create their perfect journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary-glow transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                Plan My Trip
              </button>
              <button className="px-8 py-4 glass-button rounded-2xl font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;