import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Управление мета-тегами без react-helmet
    document.title = "БРУС МАРКЕТ - Пиломатериалы высокого качества";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Широкий ассортимент пиломатериалов для строительства и отделки. Доска, брус, вагонка от производителя.");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;