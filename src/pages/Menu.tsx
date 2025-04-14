
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Filter,
  SortAsc,
  SortDesc,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    searchParams.get("filter") || null
  );
  const [sortOption, setSortOption] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter and sort products when dependencies change
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply special filters
    if (selectedFilter === "popular") {
      result = result.filter((product) => product.isPopular);
    } else if (selectedFilter === "new") {
      result = result.filter((product) => product.isNew);
    } else if (selectedFilter === "ice-creams") {
      result = result.filter((product) => product.category === "Ice Creams");
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    // "featured" is the default and doesn't need sorting

    setFilteredProducts(result);

    // Update URL params for sharing
    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }
    if (selectedFilter) {
      params.set("filter", selectedFilter);
    }
    if (sortOption !== "featured") {
      params.set("sort", sortOption);
    }
    if (searchQuery) {
      params.set("q", searchQuery);
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategory, selectedFilter, sortOption, searchQuery, setSearchParams]);

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? null : value);
  };

  // Handle filter button clicks
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-ideal py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-white/80 max-w-2xl">
              Explore our wide range of award-winning ice creams, desserts, and more. 
              From classic favorites to exciting new flavors, there's something for everyone.
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Filters and Search Section */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedFilter === "ice-creams" ? "default" : "outline"}
                  onClick={() => handleFilterClick("ice-creams")}
                  className={selectedFilter === "ice-creams" ? "bg-ideal hover:bg-ideal-dark" : ""}
                >
                  Only Ice Creams
                </Button>
                <Button
                  variant={selectedFilter === "popular" ? "default" : "outline"}
                  onClick={() => handleFilterClick("popular")}
                  className={selectedFilter === "popular" ? "bg-ideal hover:bg-ideal-dark" : ""}
                >
                  Popular
                </Button>
                <Button
                  variant={selectedFilter === "new" ? "default" : "outline"}
                  onClick={() => handleFilterClick("new")}
                  className={selectedFilter === "new" ? "bg-ideal hover:bg-ideal-dark" : ""}
                >
                  New Arrivals
                </Button>
              </div>

              <div className="flex gap-2">
                <Select
                  value={sortOption}
                  onValueChange={(value) => setSortOption(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <Select
                  value={selectedCategory || "all"}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <form onSubmit={handleSearch} className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
