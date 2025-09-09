import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WebsiteGallery from "@/components/WebsiteGallery";
import SubmissionForm from "@/components/SubmissionForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WebsiteGallery />
      <SubmissionForm />
      <Footer />
    </div>
  );
};

export default Index;
