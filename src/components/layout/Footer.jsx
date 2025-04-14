import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light border-top py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="mb-3">
              <h5 className="text-primary fw-bold">Ideal Icecream</h5>
            </div>
            <p className="text-muted small">
              Award-winning ice creams and desserts since 1975. Experience the taste of Mangalore's favorite ice cream destination.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-secondary hover-primary">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-secondary hover-primary">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-secondary hover-primary">
                <Instagram size={20} />
              </a>
            </div>
          </Col>

          <Col sm={6} lg={2} className="mb-4 mb-lg-0">
            <h6 className="text-primary fw-bold mb-3">Quick Links</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link ps-0 text-muted">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link ps-0 text-muted">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link ps-0 text-muted">Offers</Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link ps-0 text-muted">Locations</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link ps-0 text-muted">Contact Us</Link>
              </li>
            </ul>
          </Col>

          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
            <h6 className="text-primary fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <MapPin size={16} className="text-primary me-2" />
                  <span className="text-muted small">123 MG Road, Mangalore - 575001</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <Phone size={16} className="text-primary me-2" />
                  <span className="text-muted small">+91 9876543210</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Mail size={16} className="text-primary me-2" />
                  <span className="text-muted small">info@idealcafe.com</span>
                </div>
              </li>
            </ul>
          </Col>

          <Col lg={3}>
            <h6 className="text-primary fw-bold mb-3">Hours</h6>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Monday - Friday:</span>
                <span className="text-muted small">10:00 AM - 10:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted small">Saturday - Sunday:</span>
                <span className="text-muted small">10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="border-top pt-4">
          <Col lg={6} className="text-center text-lg-start">
            <p className="text-muted small mb-lg-0">
              &copy; {new Date().getFullYear()} Ideal Icecream. All rights reserved.
            </p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <Link to="/terms" className="text-muted small me-3">Terms & Conditions</Link>
            <Link to="/privacy" className="text-muted small me-3">Privacy Policy</Link>
            <Link to="/faq" className="text-muted small">FAQ</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
