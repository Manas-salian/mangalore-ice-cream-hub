
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full card-hover">
              <CardContent className="p-6 flex flex-col h-full">
                <StarRating 
                  initialRating={testimonial.rating} 
                  readOnly 
                  className="mb-4"
                />
                <p className="text-gray-600 mb-4 flex-grow italic">
                  "{testimonial.comment}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
