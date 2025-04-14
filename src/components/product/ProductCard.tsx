
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { useCart, type CartItem } from "@/hooks/use-cart";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    category: string;
    isPopular?: boolean;
    isNew?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };

    addItem(item);
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </div>
        )}
        {product.isPopular && (
          <div className="absolute top-2 left-2 bg-ideal text-white text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-ideal transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <p className="font-bold text-lg">₹{product.price.toFixed(2)}</p>
          <StarRating initialRating={product.rating} readOnly size="sm" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-2">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="h-8 w-8"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={incrementQuantity}
            disabled={quantity >= 10}
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={handleAddToCart}
          className="flex-1 bg-ideal hover:bg-ideal-dark text-white"
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
