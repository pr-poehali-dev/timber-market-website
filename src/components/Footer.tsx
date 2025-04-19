import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">БРУС МАРКЕТ</h3>
            <p className="text-gray-300 mb-4">
              Качественные пиломатериалы для строительства и отделки. Работаем с 2005 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/lumber" className="text-gray-300 hover:text-white transition-colors">
                  Доска обрезная
                </Link>
              </li>
              <li>
                <Link to="/catalog/beam" className="text-gray-300 hover:text-white transition-colors">
                  Брус строганный
                </Link>
              </li>
              <li>
                <Link to="/catalog/eurobeam" className="text-gray-300 hover:text-white transition-colors">
                  Евровагонка
                </Link>
              </li>
              <li>
                <Link to="/catalog/furniture-board" className="text-gray-300 hover:text-white transition-colors">
                  Мебельный щит
                </Link>
              </li>
              <li>
                <Link to="/catalog/plywood" className="text-gray-300 hover:text-white transition-colors">
                  Фанера
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Лесная, д. 10, стр. 1</span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+78005553535" className="hover:text-white transition-colors">
                  8 (800) 555-35-35
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@brusmarket.ru" className="hover:text-white transition-colors">
                  info@brusmarket.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} БРУС МАРКЕТ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;