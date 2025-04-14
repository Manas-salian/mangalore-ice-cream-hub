
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { getIceCreamOfTheDay } from "@/lib/data";

const IceCreamOfTheDay = () => {
  const iceCream = getIceCreamOfTheDay();

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border bg-card shadow-sm">
          <div className="md:w-1/2">
            <img
              src={iceCream.image}
              alt={iceCream.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="inline-block bg-ideal text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Ice Cream of the Day
            </div>
            <h2 className="text-3xl font-bold mb-3">{iceCream.name}</h2>
            <div className="flex items-center mb-4">
              <StarRating initialRating={iceCream.rating} readOnly />
              <span className="ml-2 text-sm text-muted-foreground">
                {iceCream.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-600 mb-6">{iceCream.description}</p>
            <p className="text-2xl font-bold mb-6">₹{iceCream.price.toFixed(2)}</p>
            <div className="flex gap-4">
              <Button asChild className="bg-ideal hover:bg-ideal-dark text-white">
                <Link to={`/product/${iceCream.id}`}>View Details</Link>
              </Button>
              <Button variant="outline">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IceCreamOfTheDay;
