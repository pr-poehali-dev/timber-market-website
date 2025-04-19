import { Truck, Shield, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: <ThumbsUp className="h-12 w-12 text-accent" />,
    title: "Качественные материалы",
    description: "Мы работаем только с проверенными поставщиками, которые поставляют пиломатериалы высшего качества."
  },
  {
    icon: <Truck className="h-12 w-12 text-accent" />,
    title: "Быстрая доставка",
    description: "Доставляем пиломатериалы в течение 1-2 дней по Москве и области на специализированном транспорте."
  },
  {
    icon: <Shield className="h-12 w-12 text-accent" />,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все виды пиломатериалов. Возможен возврат и обмен при обнаружении дефектов."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;