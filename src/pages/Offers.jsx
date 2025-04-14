import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Clipboard, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { offers } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-ideal py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white mb-4">Special Offers</h1>
            <p className="text-white/80 max-w-2xl">
              Discover our exclusive deals and discounts. From happy hours to special promotions,
              save on your favorite ice creams and treats.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => {
              const expired = isExpired(offer.validUntil);
              const comingSoon = isComingSoon(offer.validUntil);

              return (
                <Card key={offer.id} className={`overflow-hidden transition-all duration-300 ${expired ? 'opacity-60' : 'hover:shadow-lg'}`}>
                  <div className="h-2 bg-gradient-to-r from-ideal to-ideal-light"></div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{offer.title}</CardTitle>
                      {comingSoon && !expired && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                          Coming Soon
                        </span>
                      )}
                      {expired && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                          Expired
                        </span>
                      )}
                    </div>
                    <CardDescription>{offer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Valid until:{" "}
                          {new Date(offer.validUntil).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center">
                      <div className="flex-1 bg-gray-100 p-2 rounded-l-md font-mono font-medium text-center">
                        {offer.code}
                      </div>
                      <Button
                        variant="default"
                        className={expired ? "bg-gray-400 cursor-not-allowed" : "bg-ideal hover:bg-ideal-dark"}
                        onClick={() => !expired && handleCopyCode(offer.code)}
                        disabled={expired}
                        size="sm"
                      >
                        {copiedCode === offer.code ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Clipboard className="h-4 w-4" />
                        )}
                        <span className="ml-2">{copiedCode === offer.code ? "Copied" : "Copy"}</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-cream-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Spin the Wheel & Win!</h2>
            <p className="mb-6">
              Try your luck with our Wheel of Fortune and win exciting discounts
              on your next order. You could win up to 50% off!
            </p>
            <div className="text-center">
              <Button 
                className="bg-ideal hover:bg-ideal-dark"
                onClick={() => toast.success("You won 15% off on your next order! Use code WHEEL15")}
              >
                Spin & Win
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers; 