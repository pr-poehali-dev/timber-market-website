import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts: ProductCardProps[] = [
  {
    id: "1",
    title: "Доска обрезная сосна",
    image: "/placeholder.svg",
    price: 15000,
    unit: "м³",
    description: "Сухая обрезная доска из сосны. Влажность 12-15%. Сорт 1-2."
  },
  {
    id: "2",
    title: "Брус строганный",
    image: "/placeholder.svg",
    price: 18500,
    unit: "м³",
    description: "Строганный брус из хвойных пород дерева. Идеально для каркасного строительства."
  },
  {
    id: "3",
    title: "Евровагонка Сосна",
    image: "/placeholder.svg",
    price: 650,
    unit: "м²",
    description: "Высококачественная евровагонка из сосны для внутренней отделки помещений."
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Популярные товары</h2>
            <p className="text-muted-foreground mt-2">Самые востребованные пиломатериалы</p>
          </div>
          <Button asChild variant="link" className="text-accent mt-2 md:mt-0">
            <Link to="/catalog" className="flex items-center">
              Весь каталог <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;