import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;