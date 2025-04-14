import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Clipboard, Calendar, Check } from "lucide-react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { offers } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpinWheel from "@/components/offers/SpinWheel";

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [winnerCode, setWinnerCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Coupon code ${code} copied to clipboard!`);

    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  // Check if offer is expired
  const isExpired = (validUntil) => {
    return new Date(validUntil) < new Date();
  };

  // Check if offer is available soon
  const isComingSoon = (validUntil) => {
    const now = new Date();
    const validDate = new Date(validUntil);
    return validDate > now && validDate.getTime() - now.getTime() < 7 * 24 * 60 * 60 * 1000;
  };

  const handleWin = (prize) => {
    if (prize && prize.code) {
      setWinnerCode(prize.code);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <div className="bg-primary py-5">
          <Container>
            <h1 className="display-4 fw-bold text-white mb-3">Special Offers</h1>
            <p className="text-white-50 mb-0" style={{ maxWidth: "600px" }}>
              Discover our exclusive deals and discounts. From happy hours to special promotions,
              save on your favorite ice creams and treats.
            </p>
          </Container>
        </div>

        <Container className="py-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            {offers.map((offer) => {
              const expired = isExpired(offer.validUntil);
              const comingSoon = isComingSoon(offer.validUntil);

              return (
                <Col key={offer.id}>
                  <Card className={`h-100 transition ${expired ? 'opacity-50' : 'shadow-hover'}`}>
                    <div className="card-top-stripe bg-primary" style={{ height: "4px" }}></div>
                    <Card.Header className="pb-2">
                      <div className="d-flex justify-content-between align-items-start">
                        <Card.Title>{offer.title}</Card.Title>
                        {comingSoon && !expired && (
                          <Badge bg="info" className="ms-2">
                            Coming Soon
                          </Badge>
                        )}
                        {expired && (
                          <Badge bg="danger" className="ms-2">
                            Expired
                          </Badge>
                        )}
                      </div>
                      <Card.Subtitle className="text-muted">{offer.description}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between mt-2">
                        <div className="d-flex align-items-center text-muted small">
                          <Calendar className="me-1" size={16} />
                          Valid until:{" "}
                          {new Date(offer.validUntil).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="mt-3 d-flex align-items-center">
                        <div className="flex-grow-1 bg-light p-2 rounded-start fw-medium font-monospace text-center">
                          {offer.code}
                        </div>
                        <Button
                          variant={expired ? "secondary" : "primary"}
                          onClick={() => !expired && handleCopyCode(offer.code)}
                          disabled={expired}
                          size="sm"
                          className="rounded-0 rounded-end"
                        >
                          {copiedCode === offer.code ? (
                            <>
                              <Check size={16} />
                              <span className="ms-2">Copied</span>
                            </>
                          ) : (
                            <>
                              <Clipboard size={16} />
                              <span className="ms-2">Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <div className="mt-5 mx-auto bg-light rounded p-4" style={{ maxWidth: "700px" }}>
            <h2 className="text-center fw-bold mb-3">Spin the Wheel & Win!</h2>
            <p className="text-center mb-4">
              Try your luck with our Wheel of Fortune and win exciting discounts
              on your next order. You could win up to 50% off!
            </p>
            <SpinWheel onWin={handleWin} />
            
            {winnerCode && (
              <div className="mt-4 p-3 bg-white rounded text-center">
                <p className="text-muted small">Copy your code and use it at checkout</p>
                <div className="mt-2 d-flex align-items-center justify-content-center">
                  <div className="bg-light p-2 rounded-start font-monospace fw-medium text-center" style={{ maxWidth: "200px", width: "100%" }}>
                    {winnerCode}
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleCopyCode(winnerCode)}
                    size="sm"
                    className="rounded-0 rounded-end"
                  >
                    {copiedCode === winnerCode ? (
                      <>
                        <Check size={16} />
                        <span className="ms-2">Copied</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={16} />
                        <span className="ms-2">Copy</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Offers; 