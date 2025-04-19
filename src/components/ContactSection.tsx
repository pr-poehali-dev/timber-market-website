import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground">
            Остались вопросы? Заполните форму, и наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-sm">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Ваше имя
                </label>
                <Input 
                  id="name" 
                  placeholder="Иван Иванов" 
                  className="w-full" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Телефон
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@mail.ru" 
                className="w-full"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <Textarea 
                id="message" 
                placeholder="Опишите ваш вопрос или заявку..." 
                className="w-full min-h-[120px]"
              />
            </div>
            
            <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
              Отправить заявку
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;