import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/data";

const PopularProducts = () => {
  // Get popular products and include some new premium ones too
  const popularProducts = products
    .filter((product) => product.isPopular || (product.isNew && product.category === "premium"))
    .slice(0, 4);

  return (
    <section className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Popular Treats</h2>
        <Button
          as={Link}
          to="/menu"
          variant="link"
          className="d-flex align-items-center text-primary text-decoration-none"
        >
          View All <ChevronRight className="ms-1" size={18} />
        </Button>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {popularProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default PopularProducts;
