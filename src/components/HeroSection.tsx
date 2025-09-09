import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Website promotion platform hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-primary mr-3 animate-pulse" />
          <span className="text-accent font-semibold text-lg">Promote Your Website</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Amplify</span> Your
          <br />
          Digital Presence
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Submit your website to our premium directory and reach thousands of potential customers. 
          Get discovered, get noticed, get results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Submit Your Website
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="border-primary/20 hover:border-primary">
            View Directory
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
          <div className="feature-glow p-6 rounded-xl bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text">10k+</div>
            <div className="text-muted-foreground">Websites Listed</div>
          </div>
          <div className="feature-glow p-6 rounded-xl bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text">50k+</div>
            <div className="text-muted-foreground">Monthly Views</div>
          </div>
          <div className="feature-glow p-6 rounded-xl bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;