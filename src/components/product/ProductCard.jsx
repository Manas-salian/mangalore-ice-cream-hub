import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { Card, Button, Badge, InputGroup, Form } from 'react-bootstrap';
import { useCart } from "@/hooks/use-cart";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };

    addItem(item);
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="h-100 product-card">
      <div className="position-relative">
        {product.isNew && (
          <Badge 
            bg="info" 
            className="position-absolute top-0 end-0 m-2"
          >
            New
          </Badge>
        )}
        {product.isPopular && (
          <Badge 
            bg="primary" 
            className="position-absolute top-0 start-0 m-2"
          >
            Popular
          </Badge>
        )}
        <div style={{ height: '200px', overflow: 'hidden' }}>
          {imageError ? (
            <div 
              className="d-flex align-items-center justify-content-center h-100 bg-light"
              style={{ padding: '1rem' }}
            >
              <div className="text-center">
                <div className="bi bi-image text-secondary" style={{ fontSize: '2rem' }}></div>
                <p className="text-secondary small mt-2">{product.name}</p>
              </div>
            </div>
          ) : (
            <Link to={`/product/${product.id}`}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.name} 
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                onError={handleImageError}
              />
            </Link>
          )}
        </div>
      </div>
      <Card.Body>
        <Card.Title 
          as={Link} 
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark h5"
        >
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted small mb-2" style={{ height: '40px', overflow: 'hidden' }}>
          {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold h5 mb-0">₹{product.price.toFixed(2)}</span>
          <div className="d-flex">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`bi ${i < Math.round(product.rating) ? 'bi-star-fill' : 'bi-star'}`}
                style={{ color: i < Math.round(product.rating) ? '#FFD700' : '#e4e5e9', fontSize: '0.8rem' }}
              ></i>
            ))}
          </div>
        </div>
        
        <div className="d-flex gap-2">
          <InputGroup className="w-auto">
            <Button 
              variant="outline-secondary" 
              size="sm"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            <Form.Control
              value={quantity}
              readOnly
              className="text-center"
              style={{ width: '40px' }}
            />
            <Button 
              variant="outline-secondary" 
              size="sm"
              onClick={incrementQuantity}
              disabled={quantity >= 10}
            >
              <Plus size={16} />
            </Button>
          </InputGroup>
          
          <Button 
            variant="primary" 
            className="flex-grow-1"
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <>
                <Check size={16} className="me-1" /> Added
              </>
            ) : (
              "Add to Cart"
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
