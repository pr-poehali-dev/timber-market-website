import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  unit: string;
  description: string;
}

const ProductCard = ({ id, title, image, price, unit, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="text-muted-foreground mt-1 text-sm line-clamp-2">{description}</p>
        <div className="mt-3 font-bold text-accent">
          {price} ₽/{unit}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="w-full font-medium border-accent text-accent hover:bg-accent hover:text-white"
        >
          Подробнее
        </Button>
        <Button 
          className="bg-accent hover:bg-accent/90"
        >
          <ShoppingCart size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;