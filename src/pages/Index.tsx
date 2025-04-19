import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>БРУС МАРКЕТ - Пиломатериалы высокого качества</title>
        <meta name="description" content="Широкий ассортимент пиломатериалов для строительства и отделки. Доска, брус, вагонка от производителя." />
      </Helmet>

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
    </>
  );
};

export default Index;