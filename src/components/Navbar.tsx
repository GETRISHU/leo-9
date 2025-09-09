import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Clients", href: "#clients" },
    { name: "About", href: "#about", hasDropdown: true },
    { name: "Knowledge", href: "#knowledge" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "nav-blur border-b border-border/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                {/* Leo9 inspired geometric logo */}
                <div className="w-full h-full bg-foreground rounded-full relative overflow-hidden">
                  <div className="absolute inset-1 bg-background rounded-full">
                    <div className="absolute inset-1 bg-foreground rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-background rounded-full"></div>
                      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-background rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">leo9</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <div className="w-1 h-1 bg-foreground/60 rounded-full ml-2"></div>
                  )}
                </a>
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                      <a href="#" className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors">
                        Choose leo
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors">
                        leo 2
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Contact button */}
            <Button
              onClick={() => navigate('/Contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-lg px-6 py-2 text-sm font-medium"
            >
              Contact
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-9 h-9 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 nav-blur border-b border-border/20 animate-slide-up">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;