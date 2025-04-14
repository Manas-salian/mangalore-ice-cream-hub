
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <span className="text-xl md:text-2xl font-bold text-ideal">
        <span className="text-ideal">Ideal</span>{" "}
        <span className="text-ideal-light">Café</span>
      </span>
    </Link>
  );
};

export default Logo;
