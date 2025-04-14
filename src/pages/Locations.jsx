
import { Phone, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { locations } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-ideal py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white mb-4">Our Locations</h1>
            <p className="text-white/80 max-w-2xl">
              Find the nearest Ideal Café outlet in Mangalore. Visit us to enjoy our
              award-winning ice creams and other delicious treats.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden card-hover">
                <CardHeader className="pb-2">
                  <CardTitle>{location.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-start mt-2">
                      <MapPin className="h-5 w-5 text-ideal mr-2 shrink-0 mt-0.5" />
                      <span>{location.address}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-ideal mr-2" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-ideal mr-2" />
                    <span>{location.hours}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <iframe
                      title={`Map for ${location.name}`}
                      width="100%"
                      height="200"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src={`https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=15&output=embed`}
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
