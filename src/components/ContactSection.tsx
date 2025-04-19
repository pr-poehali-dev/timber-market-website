import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Остались вопросы? Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Напишите нам</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Input type="text" placeholder="Ваше имя" className="w-full" />
                </div>
                <div>
                  <Input type="tel" placeholder="Ваш телефон" className="w-full" />
                </div>
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Ваш e-mail" className="w-full" />
              </div>
              <div className="mb-6">
                <Textarea placeholder="Ваше сообщение" className="w-full h-32" />
              </div>
              <Button className="w-full md:w-auto bg-accent hover:bg-accent/90">Отправить сообщение</Button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Лесная, д. 10, стр. 1</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneCall className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+78005553535" className="hover:text-accent transition-colors">
                      8 (800) 555-35-35
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@brusmarket.ru" className="hover:text-accent transition-colors">
                      info@brusmarket.ru
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                  <p className="text-muted-foreground">Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;