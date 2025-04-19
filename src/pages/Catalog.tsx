import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";

const products: ProductCardProps[] = [
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
  },
  {
    id: "4",
    title: "Доска террасная",
    image: "/placeholder.svg",
    price: 1200,
    unit: "м²",
    description: "Террасная доска из лиственницы. Устойчива к влаге и перепадам температур."
  },
  {
    id: "5",
    title: "Мебельный щит из сосны",
    image: "/placeholder.svg",
    price: 1600,
    unit: "м²",
    description: "Мебельный щит из массива сосны. Для изготовления мебели и отделки интерьера."
  },
  {
    id: "6",
    title: "Фанера ФК 10мм",
    image: "/placeholder.svg",
    price: 850,
    unit: "лист",
    description: "Фанера ФК, толщина 10мм. Формат листа 1525x1525 мм."
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Управление мета-тегами без react-helmet
    document.title = "Каталог пиломатериалов - БРУС МАРКЕТ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Широкий выбор пиломатериалов для строительства и отделки. Доска, брус, вагонка с доставкой по Москве и области.");
    }
  }, []);
  
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Каталог пиломатериалов</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по каталогу"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price_asc">Сначала дешевле</SelectItem>
                  <SelectItem value="price_desc">Сначала дороже</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Фильтры
              </Button>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры поиска или фильтрации
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery("")}
              >
                Сбросить поиск
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;