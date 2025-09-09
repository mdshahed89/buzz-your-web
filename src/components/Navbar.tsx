import { Button } from "@/components/ui/button";
import { Menu, Zap, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthModals from "./AuthModals";

const Navbar = () => {
  const { isAuthenticated, user, signOut, showAuthModal, setShowAuthModal, setAuthModalTab } = useAuth();

  const handleSignIn = () => {
    setAuthModalTab('signin');
    setShowAuthModal(true);
  };

  const handleSignUp = () => {
    setAuthModalTab('signup');
    setShowAuthModal(true);
  };

  const handleSubmitWebsite = () => {
    if (!isAuthenticated) {
      handleSignUp();
    } else {
      // Scroll to submission form or navigate to a dedicated page
      const element = document.getElementById('submission-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">PromoteHub</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/directory" className="text-foreground hover:text-primary transition-colors">
                Directory
              </Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user?.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" className="hidden sm:inline-flex" onClick={handleSignIn}>
                  Sign In
                </Button>
              )}
              <Button variant="premium" size="lg" onClick={handleSubmitWebsite}>
                Submit Website
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModals 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        defaultTab="signin"
      />
    </>
  );
};

export default Navbar;