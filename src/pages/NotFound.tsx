import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="text-center relative z-10">
        <div className="glass-card p-12 curved-2xl max-w-lg mx-auto animate-fade-in">
          <h1 className="text-8xl font-bold text-primary mb-4 animate-glow">404</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Looks like this destination doesn't exist on our map. Let's get you back on track!
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
