
// Ice cream and other product data

// Function to get the ice cream of the day
export function getIceCreamOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Use the day of the year to select an ice cream
  const iceCream = products[dayOfYear % products.length];
  return iceCream;
}

// Product data
export const products = [
  {
    id: "1",
    name: "Gadbad Ice Cream",
    description: "The signature dessert of Mangalore. A delicious mix of multiple ice cream flavors, jelly, fruits, and nuts.",
    price: 120,
    image: "https://img.freepik.com/free-photo/delicious-vanilla-ice-cream-with-chocolate-syrup-nuts-wooden-table_1220-6768.jpg",
    rating: 4.9,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "2",
    name: "Chocolate Fudge",
    description: "Rich and creamy chocolate ice cream loaded with fudge chunks.",
    price: 90,
    image: "https://img.freepik.com/free-photo/chocolate-ice-cream-dark-plate-with-mint-leaves_114579-33190.jpg",
    rating: 4.7,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "3",
    name: "Vanilla Dream",
    description: "Smooth vanilla ice cream made from the finest Madagascar vanilla beans.",
    price: 80,
    image: "https://img.freepik.com/free-photo/delicious-vanilla-ice-cream-cone_23-2148867986.jpg",
    rating: 4.5,
    category: "ice-cream"
  },
  {
    id: "4",
    name: "Mango Delight",
    description: "Seasonal mango ice cream made from the sweetest Alphonso mangoes.",
    price: 100,
    image: "https://img.freepik.com/free-photo/scoop-vanilla-ice-cream-pink-bowl-white-color-pastel-background_116441-9262.jpg",
    rating: 4.8,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "5",
    name: "Cold Coffee",
    description: "Our signature cold coffee topped with vanilla ice cream.",
    price: 70,
    image: "https://img.freepik.com/free-photo/mocha-coffee-with-ice-cream-served-with-milk_140725-9450.jpg",
    rating: 4.6,
    category: "beverage"
  },
  {
    id: "6",
    name: "Pista Kulfi",
    description: "Traditional Indian ice cream rich in pistachios and cardamom.",
    price: 60,
    image: "https://img.freepik.com/free-photo/pistachio-ice-cream-with-nuts-white-plate_114579-33095.jpg",
    rating: 4.7,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "7",
    name: "Fruit Salad with Ice Cream",
    description: "Fresh seasonal fruits topped with a scoop of vanilla ice cream.",
    price: 110,
    image: "https://img.freepik.com/free-photo/watermelon-berries-mint-sweet-ice-cream_140725-2504.jpg",
    rating: 4.4,
    category: "dessert"
  },
  {
    id: "8",
    name: "Butterscotch Sundae",
    description: "Butterscotch ice cream loaded with caramelized nuts and butterscotch sauce.",
    price: 130,
    image: "https://img.freepik.com/free-photo/chocolate-vanilla-dessert-with-chopped-nuts-caramel-topping-side-view-sweet-modern-pastry-dessert-white-plate-restaurant-dish-close-up-selective-focus_695186-834.jpg",
    rating: 4.6,
    category: "ice-cream"
  },
  {
    id: "9",
    name: "Rose Milk Shake",
    description: "Refreshing rose flavored milkshake topped with rose ice cream.",
    price: 85,
    image: "https://img.freepik.com/free-photo/delicious-pink-strawberry-milkshake-table_23-2148867063.jpg",
    rating: 4.3,
    category: "beverage",
    isNew: true
  },
  {
    id: "10",
    name: "Classic Banana Split",
    description: "Traditional banana split with three flavors of ice cream, nuts, and chocolate sauce.",
    price: 150,
    image: "https://img.freepik.com/free-photo/strawberry-scoop-chocolate-syrup-bowl-fruit-ice-cream-with-yogurt-milk-cocktail-close-up-organic-dessert-white-creamy-gelato-berry-homemade-fruit_1258-74254.jpg",
    rating: 4.8,
    category: "dessert",
    isNew: true
  }
];

// Testimonials data
export const testimonials = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rating: 5,
    date: "2023-11-20",
    comment: "The Gadbad ice cream here is the best in Mangalore! I've been coming here for years and the quality never disappoints."
  },
  {
    id: "2",
    name: "Priya Sharma",
    rating: 4,
    date: "2023-10-15",
    comment: "Absolutely love the chocolate fudge. The ambiance of the café is also very welcoming."
  },
  {
    id: "3",
    name: "Anil Shetty",
    rating: 5,
    date: "2023-11-05",
    comment: "Ideal Café has been serving the best ice creams in Mangalore for decades. My favorite is the Pista Kulfi!"
  },
  {
    id: "4",
    name: "Sarah Johnson",
    rating: 4,
    date: "2023-09-28",
    comment: "Visited during my trip to Mangalore. The Fruit Salad with Ice Cream was so refreshing. Will definitely come back!"
  }
];

// Location data
export const locations = [
  {
    id: "1",
    name: "Ideal Café - City Center",
    address: "123 MG Road, Mangalore - 575001",
    phone: "+91 9876543210",
    hours: "10:00 AM - 10:00 PM",
    coordinates: {
      lat: 12.8698,
      lng: 74.8430
    }
  },
  {
    id: "2",
    name: "Ideal Café - Bejai",
    address: "45 Bejai Main Road, Mangalore - 575004",
    phone: "+91 9876543211",
    hours: "10:00 AM - 10:00 PM",
    coordinates: {
      lat: 12.8833,
      lng: 74.8421
    }
  },
  {
    id: "3",
    name: "Ideal Café - Surathkal",
    address: "Near NITK, Surathkal, Mangalore - 575025",
    phone: "+91 9876543212",
    hours: "10:00 AM - 11:00 PM",
    coordinates: {
      lat: 13.0107,
      lng: 74.7944
    }
  }
];
