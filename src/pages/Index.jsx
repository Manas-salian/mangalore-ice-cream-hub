
import HeroCarousel from "@/components/home/HeroCarousel";
import IceCreamOfTheDay from "@/components/home/IceCreamOfTheDay";
import PopularProducts from "@/components/home/PopularProducts";
import SpecialOfferBanner from "@/components/home/SpecialOfferBanner";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />
        <PopularProducts />
        <SpecialOfferBanner />
        <IceCreamOfTheDay />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
