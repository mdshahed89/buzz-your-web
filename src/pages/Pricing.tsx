import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      icon: Zap,
      description: "Perfect for startups and small businesses",
      features: [
        "Submit up to 3 websites",
        "Basic listing in directory",
        "Email support",
        "Standard review time (48hrs)"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      icon: Crown,
      description: "Best for growing businesses",
      features: [
        "Submit up to 10 websites",
        "Premium listing with badge",
        "Priority email support",
        "Fast review time (24hrs)",
        "Featured placement",
        "Analytics dashboard"
      ],
      buttonText: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      icon: Rocket,
      description: "For agencies and large companies",
      features: [
        "Unlimited website submissions",
        "Premium listing with custom badge",
        "Dedicated account manager",
        "Instant review (6hrs)",
        "Top featured placement",
        "Advanced analytics",
        "Custom integration support",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your website discovered by thousands of potential customers. 
              Choose the plan that fits your business needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-glow border-border/20 relative ${
                  plan.popular ? 'border-primary/50 shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full mb-6"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  How fast will my website be reviewed?
                </h4>
                <p className="text-muted-foreground">
                  Review times vary by plan: Standard (48hrs), Professional (24hrs), Enterprise (6hrs).
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Can I upgrade or downgrade my plan?
                </h4>
                <p className="text-muted-foreground">
                  Yes! You can change your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  What if my website gets rejected?
                </h4>
                <p className="text-muted-foreground">
                  We provide detailed feedback and you can resubmit after making improvements.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Is there a money-back guarantee?
                </h4>
                <p className="text-muted-foreground">
                  Yes! We offer a 30-day money-back guarantee on all plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;