
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="max-w-xs text-sm text-gray-600">
              Award-winning ice creams and desserts since 1975. Experience the taste of Mangalore's favorite ice cream destination.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-ideal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-ideal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-ideal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-medium text-ideal">Quick Links</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ideal transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-ideal transition-colors">Menu</Link>
              <Link to="/offers" className="hover:text-ideal transition-colors">Offers</Link>
              <Link to="/locations" className="hover:text-ideal transition-colors">Locations</Link>
              <Link to="/contact" className="hover:text-ideal transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <p className="font-medium text-ideal">Contact</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-ideal" />
                <span>123 MG Road, Mangalore - 575001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-ideal" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-ideal" />
                <span>info@idealcafe.com</span>
              </div>
            </nav>
          </div>

          <div>
            <p className="font-medium text-ideal">Hours</p>
            <div className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>10:00 AM - 10:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ideal Café. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-xs mb-4 lg:mb-0">
            <Link to="/terms" className="text-gray-500 hover:text-ideal transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-ideal transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-gray-500 hover:text-ideal transition-colors">FAQ</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
