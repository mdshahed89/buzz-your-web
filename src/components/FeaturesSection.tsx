import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, TrendingUp, Users, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast Approval",
      description: "Get your website reviewed and listed within 24 hours. Quick and efficient process."
    },
    {
      icon: Target,
      title: "Targeted Audience",
      description: "Reach users who are actively looking for services like yours. Quality over quantity."
    },
    {
      icon: TrendingUp,
      title: "Boost SEO",
      description: "High-quality backlinks from our directory improve your search engine rankings."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving community of entrepreneurs and innovators showcasing their work."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "We manually review each submission to maintain the highest quality standards."
    },
    {
      icon: Zap,
      title: "Instant Exposure",
      description: "Your website gets immediate visibility to thousands of potential customers."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">PromoteHub</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide the tools and platform you need to get your website discovered by the right audience.
            Join thousands of successful businesses already growing with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-glow border-border/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;