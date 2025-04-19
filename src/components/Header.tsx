import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl text-wood-dark">
              БРУС <span className="text-accent">МАРКЕТ</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-accent transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="font-medium hover:text-accent transition-colors">
            Каталог
          </Link>
          <Link to="/services" className="font-medium hover:text-accent transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="font-medium hover:text-accent transition-colors">
            О компании
          </Link>
          <Link to="/contacts" className="font-medium hover:text-accent transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+78005553535" className="flex items-center gap-2">
            <PhoneCall size={18} className="text-accent" />
            <span className="font-medium">8 (800) 555-35-35</span>
          </a>
          <Button className="bg-accent hover:bg-accent/90">Заказать звонок</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 font-medium hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="py-2 font-medium hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Каталог
            </Link>
            <Link 
              to="/services" 
              className="py-2 font-medium hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </Link>
            <Link 
              to="/about" 
              className="py-2 font-medium hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              О компании
            </Link>
            <Link 
              to="/contacts" 
              className="py-2 font-medium hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <div className="pt-2 border-t">
              <a href="tel:+78005553535" className="flex items-center gap-2 py-2">
                <PhoneCall size={18} className="text-accent" />
                <span className="font-medium">8 (800) 555-35-35</span>
              </a>
              <Button className="w-full mt-2 bg-accent hover:bg-accent/90">Заказать звонок</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;