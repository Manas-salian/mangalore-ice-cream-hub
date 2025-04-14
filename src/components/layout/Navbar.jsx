import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { 
  Navbar as BootstrapNavbar, 
  Container, 
  Nav, 
  Form, 
  FormControl, 
  Button, 
  Badge, 
  Offcanvas
} from 'react-bootstrap';
import { useCart } from "@/hooks/use-cart";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "Offers", href: "/offers" },
  { title: "Locations", href: "/locations" },
  { title: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useCart();
  const cartItemsCount = items.length;
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <BootstrapNavbar expand="lg" className="navbar-ice sticky-top py-2">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img 
            src="/images/logo.png" 
            alt="Ideal Ice Cream" 
            height="40"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/200x50/7C2D75/FFF.png?text=Ideal+Icecream";
            }}
          />
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleShowOffcanvas}
        />
        
        <BootstrapNavbar.Offcanvas
          id="basic-navbar-nav"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {navItems.map((item) => (
                <Nav.Link 
                  key={item.href} 
                  as={Link} 
                  to={item.href}
                  active={location.pathname === item.href}
                  onClick={handleCloseOffcanvas}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
        
        <div className="d-none d-lg-flex ms-auto me-3 position-relative" style={{ width: '300px' }}>
          <Form className="w-100 position-relative">
            <FormControl
              type="search"
              placeholder="Search for ice creams..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-primary" className="position-absolute end-0 top-0 bottom-0">
              <Search size={18} />
            </Button>
          </Form>
        </div>
        
        <div className="d-flex align-items-center">
          <Button 
            as={Link} 
            to="/cart" 
            variant="link" 
            className="position-relative me-2 p-1"
          >
            <ShoppingCart size={22} />
            {cartItemsCount > 0 && (
              <Badge 
                bg="primary" 
                pill 
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>
          
          <Button 
            as={Link} 
            to="/signin" 
            variant="link" 
            className="p-1"
          >
            <User size={22} />
          </Button>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
