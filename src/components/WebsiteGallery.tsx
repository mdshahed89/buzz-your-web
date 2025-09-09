import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star } from "lucide-react";

const WebsiteGallery = () => {
  // Mock data - in real app this would come from Supabase
  const websites = [
    {
      id: 1,
      name: "TechFlow SaaS",
      url: "https://techflow.com",
      description: "Revolutionary project management platform for modern teams",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      views: 2430,
      rating: 4.8
    },
    {
      id: 2,
      name: "EcoStore",
      url: "https://ecostore.com",
      description: "Sustainable products marketplace for conscious consumers",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      views: 1850,
      rating: 4.9
    },
    {
      id: 3,
      name: "Design Studio Pro",
      url: "https://designstudio.com",
      description: "Creative agency specializing in brand identity and web design",
      category: "Agency",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      views: 3200,
      rating: 4.7
    },
    {
      id: 4,
      name: "FinanceTracker",
      url: "https://financetracker.com",
      description: "Personal finance management app with AI-powered insights",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      views: 1650,
      rating: 4.6
    },
    {
      id: 5,
      name: "LearnHub",
      url: "https://learnhub.com",
      description: "Online learning platform with interactive courses and mentorship",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      views: 2890,
      rating: 4.8
    },
    {
      id: 6,
      name: "Creative Portfolio",
      url: "https://portfolio.com",
      description: "Stunning portfolio showcase for photographers and artists",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      views: 1420,
      rating: 4.9
    }
  ];

  const categoryColors: Record<string, string> = {
    "SaaS": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "E-commerce": "bg-green-500/20 text-green-400 border-green-500/30",
    "Agency": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Finance": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Education": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Portfolio": "bg-pink-500/20 text-pink-400 border-pink-500/30"
  };

  return (
    <section id="directory" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Websites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing websites from our community. Get inspired and find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website) => (
            <Card key={website.id} className="card-glow border-border/20 group overflow-hidden">
              {/* Website Preview Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={website.image} 
                  alt={`${website.name} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Category Badge */}
                <Badge 
                  className={`absolute top-4 left-4 ${categoryColors[website.category] || 'bg-primary/20 text-primary border-primary/30'}`}
                  variant="outline"
                >
                  {website.category}
                </Badge>

                {/* Visit Button */}
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {website.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {website.rating}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {website.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    {website.views.toLocaleString()} views
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Visit Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary">
            View All Websites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteGallery;