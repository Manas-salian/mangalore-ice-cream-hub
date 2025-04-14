
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  initialRating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  readOnly?: boolean;
  onRate?: (rating: number) => void;
  className?: string;
}

export function StarRating({
  initialRating = 0,
  maxRating = 5,
  size = "md",
  readOnly = false,
  onRate,
  className,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const sizes = {
    sm: "w-3 h-3",
    md: "w-5 h-5", 
    lg: "w-6 h-6",
  };

  const handleRating = (newRating: number) => {
    if (readOnly) return;
    
    setRating(newRating);
    onRate?.(newRating);
  };

  return (
    <div 
      className={cn("flex items-center", className)}
      onMouseLeave={() => setHoverRating(0)}
    >
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            className={cn(
              sizes[size],
              "transition-all duration-150 ease-in-out cursor-pointer",
              (hoverRating || rating) >= starValue
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300",
              !readOnly && "hover:scale-110"
            )}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
          />
        );
      })}
    </div>
  );
}
