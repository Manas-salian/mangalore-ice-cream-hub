import { Container } from 'react-bootstrap';
import HeroCarousel from "@/components/home/HeroCarousel";
import IceCreamOfTheDay from "@/components/home/IceCreamOfTheDay";
import PopularProducts from "@/components/home/PopularProducts";
import SpecialOfferBanner from "@/components/home/SpecialOfferBanner";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroCarousel />
        <Container className="py-5">
          <PopularProducts />
          <SpecialOfferBanner />
          <IceCreamOfTheDay />
          <Testimonials />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
