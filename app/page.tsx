import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductSection from "@/components/home/ProductSection";
import ProjectSection from "@/components/home/ProjectSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ProjectSection />
      </main>

      <Footer />
    </>
  );
}