
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Award-Winning Ice Creams",
    subtitle: "Experience the taste of Mangalore's finest",
    image: "https://img.freepik.com/free-photo/fruit-ice-cream-dessert-strawberry-sweet_1203-7744.jpg",
    cta: "Explore Menu",
    link: "/menu",
  },
  {
    id: 2,
    title: "Try Our Famous Gadbad",
    subtitle: "Mangalore's most loved ice cream since 1975",
    image: "https://img.freepik.com/free-photo/layered-dessert-with-vanilla-strawberry-ice-cream-white-pink-sauce-served-glasses_114579-1840.jpg",
    cta: "Order Now",
    link: "/menu",
  },
  {
    id: 3,
    title: "New Seasonal Flavors",
    subtitle: "Limited time special flavors you can't miss",
    image: "https://img.freepik.com/free-photo/homemade-ice-cream-fruit-cream-dessert-food-photography_53876-104918.jpg",
    cta: "See What's New",
    link: "/menu?filter=new",
  },
];

const HeroCarousel = () => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] md:h-[500px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-6 max-w-md">
                    {slide.subtitle}
                  </p>
                  <div>
                    <Button
                      asChild
                      className="bg-ideal hover:bg-ideal-dark text-white"
                    >
                      <Link to={slide.link}>{slide.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
