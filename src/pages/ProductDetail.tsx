
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { products } from "@/lib/data";
import { useCart } from "@/hooks/use-cart";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const toppings = [
  { id: "chocolate", name: "Chocolate Sauce" },
  { id: "caramel", name: "Caramel Sauce" },
  { id: "sprinkles", name: "Rainbow Sprinkles" },
  { id: "nuts", name: "Mixed Nuts" },
  { id: "cherry", name: "Cherry" },
];

const sizes = [
  { id: "small", name: "Small", priceFactor: 1 },
  { id: "medium", name: "Medium", priceFactor: 1.5 },
  { id: "large", name: "Large", priceFactor: 2 },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/menu">Back to Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    const selectedSizeObj = sizes.find((s) => s.id === selectedSize);
    const price = product.price * (selectedSizeObj?.priceFactor || 1);
    
    const customizations: Record<string, string> = {
      size: selectedSize,
    };
    
    if (selectedToppings.length > 0) {
      customizations.toppings = selectedToppings.join(", ");
    }

    addItem({
      id: product.id,
      name: product.name,
      price,
      image: product.image,
      quantity,
      customizations,
    });

    toast.success(`${product.name} added to cart!`);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    // In a real application, this would submit the review to a backend
    toast.success("Thank you for your review!");
    setUserRating(0);
    setReviewText("");
  };

  const handleToggleTopping = (toppingId: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  const selectedSizeObj = sizes.find((s) => s.id === selectedSize);
  const totalPrice = product.price * (selectedSizeObj?.priceFactor || 1) * quantity;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/menu" className="flex items-center text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Menu
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.isNew && (
                <div className="inline-block mt-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  New
                </div>
              )}
              {product.isPopular && (
                <div className="inline-block mt-4 ml-2 bg-ideal text-white text-sm font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <StarRating initialRating={product.rating} readOnly />
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-2xl font-bold mb-6">₹{totalPrice.toFixed(2)}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Select Size</h3>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                    className="flex flex-wrap gap-4"
                  >
                    {sizes.map((size) => (
                      <div key={size.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={size.id} id={`size-${size.id}`} />
                        <Label htmlFor={`size-${size.id}`}>
                          {size.name} (+₹
                          {((size.priceFactor - 1) * product.price).toFixed(2)})
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Add Toppings</h3>
                  <div className="flex flex-wrap gap-2">
                    {toppings.map((topping) => (
                      <Button
                        key={topping.id}
                        variant={selectedToppings.includes(topping.id) ? "default" : "outline"}
                        onClick={() => handleToggleTopping(topping.id)}
                        className={
                          selectedToppings.includes(topping.id)
                            ? "bg-ideal hover:bg-ideal-dark"
                            : ""
                        }
                      >
                        {topping.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4 w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      disabled={quantity >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-ideal hover:bg-ideal-dark"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="reviews">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6">
                <h3 className="text-xl font-medium mb-4">About {product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-600">
                  Our ice creams are made with the finest ingredients, sourced locally whenever possible. We never use artificial flavors or preservatives, ensuring that you get the authentic taste in every scoop.
                </p>
              </TabsContent>
              <TabsContent value="reviews" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <StarRating initialRating={5} readOnly size="sm" />
                          <span className="ml-2 font-medium">Deepak S.</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          This is the best ice cream I've had in Mangalore! The texture is perfect and the flavor is rich.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <StarRating initialRating={4} readOnly size="sm" />
                          <span className="ml-2 font-medium">Aisha R.</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Delicious and creamy! I love that it's not too sweet and you can taste the quality of ingredients.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4">Write a Review</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div>
                        <Label htmlFor="rating" className="block mb-2">
                          Your Rating
                        </Label>
                        <StarRating
                          initialRating={userRating}
                          onRate={setUserRating}
                          size="lg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="review" className="block mb-2">
                          Your Review
                        </Label>
                        <textarea
                          id="review"
                          rows={4}
                          className="w-full p-2 border rounded-md"
                          placeholder="Share your experience with this product..."
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                      </div>
                      <Button type="submit">Submit Review</Button>
                    </form>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
