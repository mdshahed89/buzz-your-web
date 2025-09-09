import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, User, FileText, Send } from "lucide-react";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
    description: "",
    category: "",
    email: "",
    contactName: ""
  });

  const categories = [
    "SaaS", "E-commerce", "Portfolio", "Blog", "Agency", "Startup", "Education", "Health", "Finance", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Supabase
    console.log("Form submitted:", formData);
  };

  return (
    <section id="submission-form" className="py-24 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Submit Your <span className="gradient-text">Website</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to get discovered? Fill out the form below and we'll review your website for inclusion in our directory.
          </p>
        </div>

        <Card className="card-glow border-border/20">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              Website Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="websiteName" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website Name *
                  </Label>
                  <Input
                    id="websiteName"
                    placeholder="My Awesome Website"
                    value={formData.websiteName}
                    onChange={(e) => setFormData({...formData, websiteName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="websiteUrl" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website URL *
                  </Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://mywebsite.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about your website, what it does, and what makes it special..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Category</Label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={formData.category === category ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setFormData({...formData, category})}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name *
                  </Label>
                  <Input
                    id="contactName"
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Submit Website for Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubmissionForm;