import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []); 

  const clientLogos = [
    { name: "KPIT", width: "80" },
    { name: "TATA", width: "70" },
    { name: "BMW", width: "60" },
    { name: "SONY", width: "80" },
    { name: "HUGGIES", width: "90" },
    { name: "ETON", width: "70" },
    { name: "KIMIRICA", width: "90" },
    { name: "INDIUM", width: "80" },
    { name: "Choice", width: "80" },
    { name: "Star", width: "60" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col mt-16">
      {/* Geometric background pattern */}
      <div className="absolute left-0 top-1/4 w-64 h-64 geometric-dots opacity-40 animate-float"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 geometric-dots opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Main hero content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Typography */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-2">
                <div className={`hero-title animate-fade-up hero-word-1 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  Design
                </div>
                <div className={`hero-title animate-fade-up hero-word-2 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  Transform
                </div>
                <div className={`hero-title animate-fade-up hero-word-3 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  Accelerate
                </div>
              </div>

              <div className={`space-y-6 animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <p className="hero-subtitle text-foreground/80 max-w-lg mx-auto lg:mx-0">
                  Redefining user experiences through<br />
                  Behavioural Science & AI
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                  onClick={()=> navigate('/Projects')}
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 px-8 py-3 rounded-lg font-medium"
                  >
                    Start Your Project
                  </Button>
                  <Button 
                   onClick={()=> navigate('/Works')}
                    variant="outline" 
                    size="lg" 
                    className="border-border hover:bg-accent transition-all duration-300 hover:scale-105 px-8 py-3 rounded-lg"
                  >
                    View Our Work
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className={`relative animate-fade-in-delay ${isVisible ? "opacity-100" : "opacity-0"}`}>
                {/* Geometric shapes inspired by Leo9's design */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-2 border-foreground/10 rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-8 border border-foreground/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute inset-16 bg-foreground/5 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-foreground/30 rounded-full animate-float"></div>
                    </div>
                  </div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-8 right-12 w-3 h-3 bg-foreground/40 rounded-full animate-float"></div>
                  <div className="absolute bottom-12 left-8 w-2 h-2 bg-foreground/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-foreground/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Client logos section */}
      <div className={`border-t border-border/20 py-12 animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground font-medium">
              Your trusted UI UX design agency.
            </p>
          </div>
          
          {/* Logo carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-12"
                  style={{ minWidth: logo.width + "px" }}
                >
                  <span className="text-lg font-bold text-muted-foreground/80 hover:text-foreground transition-colors duration-200">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;