
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SpecialOfferBanner = () => {
  return (
    <section className="py-16 bg-ideal text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-md">
            <h2 className="text-3xl font-bold mb-4">Happy Hours Special</h2>
            <p className="text-lg mb-6">
              Enjoy 20% off on all ice creams between 2 PM and 4 PM every day.
              Perfect for your afternoon cravings!
            </p>
            <Button asChild className="bg-white text-ideal hover:bg-cream">
              <Link to="/offers">View All Offers</Link>
            </Button>
          </div>
          <div className="w-full md:w-auto relative animate-float">
            <img
              src="https://img.freepik.com/free-photo/caramel-ice-cream-piece-cake-plate_140725-5916.jpg"
              alt="Special offer"
              className="rounded-lg shadow-xl max-w-xs md:max-w-sm"
            />
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold text-xl p-4 rounded-full transform rotate-12 shadow-lg">
              20% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
