
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/data";

const PopularProducts = () => {
  // Get popular products and include some new premium ones too
  const popularProducts = products
    .filter((product) => product.isPopular || (product.isNew && product.category === "premium"))
    .slice(0, 4);

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Treats</h2>
          <Button
            variant="ghost"
            className="text-ideal hover:text-ideal-dark"
            asChild
          >
            <Link to="/menu" className="flex items-center">
              View All <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
