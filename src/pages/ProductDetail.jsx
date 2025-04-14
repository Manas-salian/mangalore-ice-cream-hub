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
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedToppings, setSelectedToppings] = useState([]);
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
    
    const customizations = {
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

  const handleSubmitReview = (e) => {
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

  const handleToggleTopping = (toppingId) => {
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
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="mb-6">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Info</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <h3 className="text-xl font-bold">About {product.name}</h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Ingredients</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.ingredients?.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Allergen Information</h4>
                  <p className="text-gray-600">
                    Contains: Milk, Soy. May contain traces of nuts.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="nutrition" className="space-y-4">
                <h3 className="text-xl font-bold">Nutrition Information</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Values based on standard recipe for medium size.
                </p>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Calories</td>
                        <td className="px-4 py-2 text-right">240 kcal</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2 font-medium">Fat</td>
                        <td className="px-4 py-2 text-right">12g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 pl-8">of which saturates</td>
                        <td className="px-4 py-2 text-right">8g</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2 font-medium">Carbohydrates</td>
                        <td className="px-4 py-2 text-right">30g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 pl-8">of which sugars</td>
                        <td className="px-4 py-2 text-right">25g</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2 font-medium">Protein</td>
                        <td className="px-4 py-2 text-right">4g</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Salt</td>
                        <td className="px-4 py-2 text-right">0.1g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <StarRating initialRating={product.rating} readOnly />
                    <span className="text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold mb-3">Write a Review</h4>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <Label htmlFor="rating" className="block mb-2">
                        Your Rating
                      </Label>
                      <StarRating
                        initialRating={userRating}
                        onChange={setUserRating}
                      />
                    </div>
                    <div>
                      <Label htmlFor="review" className="block mb-2">
                        Your Review
                      </Label>
                      <textarea
                        id="review"
                        className="w-full p-2 border rounded"
                        rows={4}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      ></textarea>
                    </div>
                    <Button type="submit">Submit Review</Button>
                  </form>
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