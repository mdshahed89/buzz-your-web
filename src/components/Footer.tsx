import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: 'https://twitter.com/promotehub',
      github: 'https://github.com/promotehub',
      linkedin: 'https://linkedin.com/company/promotehub',
      mail: 'mailto:contact@promotehub.com'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle internal links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href !== '#') {
      // Handle external links
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Handle placeholder links
      alert('This feature is coming soon!');
    }
  };

  return (
    <footer className="bg-card/20 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">PromoteHub</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The premier platform for promoting your website and reaching new audiences. 
              Join thousands of successful businesses growing with us.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleSocialClick('twitter')}>
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleSocialClick('github')}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleSocialClick('linkedin')}>
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleSocialClick('mail')}>
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#features'); }}>Features</a></li>
              <li><a href="#directory" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#directory'); }}>Directory</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }}>Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Careers</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>Guidelines</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 PromoteHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>
              Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>
              Changelog
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); handleLinkClick('#'); }}>
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;