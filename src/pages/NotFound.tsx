import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-bold text-wood-dark">404</h1>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8">
            Извините, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90" size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;