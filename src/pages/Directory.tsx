import Navbar from "@/components/Navbar";
import WebsiteGallery from "@/components/WebsiteGallery";
import Footer from "@/components/Footer";

const Directory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <WebsiteGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Directory;