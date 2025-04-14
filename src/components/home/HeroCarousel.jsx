import { Link } from "react-router-dom";
import { Carousel, Button } from 'react-bootstrap';

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
    <Carousel fade interval={5000} className="hero-carousel">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div style={{ 
            height: '500px', 
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-md-6">
                  <h2 className="display-4 text-white fw-bold">{slide.title}</h2>
                  <p className="text-white lead mb-4">{slide.subtitle}</p>
                  <Button 
                    as={Link} 
                    to={slide.link} 
                    variant="primary" 
                    size="lg"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
