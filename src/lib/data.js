// Ice cream and other product data

// Function to get the ice cream of the day
export function getIceCreamOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Use the day of the year to select an ice cream
  const iceCream = products[dayOfYear % products.length];
  return iceCream;
}

// Product categories
export const categories = ["ice-cream", "sundae", "cone", "premium", "family-pack", "sugar-free", "candy", "beverage", "dessert"];

// Product data
export const products = [
  {
    id: "1",
    name: "Gadbad Ice Cream",
    description: "The signature dessert of Mangalore. A delicious mix of multiple ice cream flavors, jelly, fruits, and nuts.",
    price: 120,
    image: "https://naturalicecreams.in/wp-content/uploads/2024/11/Mangalorian-Gadbad-Ice-Cream.jpg",
    rating: 4.9,
    category: "sundae",
    isPopular: true
  },
  {
    id: "2",
    name: "Chocolate Fudge",
    description: "Rich and creamy chocolate ice cream loaded with fudge chunks.",
    price: 90,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/chocolate-fudge-recipe-1a.jpg",
    rating: 4.7,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "3",
    name: "Vanilla Dream",
    description: "Smooth vanilla ice cream made from the finest Madagascar vanilla beans.",
    price: 80,
    image: "https://www.simplyscratch.com/wp-content/uploads/2013/05/Vanilla-Ice-Cream-Bowl.jpg",
    rating: 4.5,
    category: "cone"
  },
  {
    id: "4",
    name: "Mango Delight",
    description: "Seasonal mango ice cream made from the sweetest Alphonso mangoes.",
    price: 100,
    image: "https://img.pikbest.com/wp/202344/ice-cream-scoop-summertime-delight-vanilla-with-mango-twist_9920919.jpg!w700wp",
    rating: 4.8,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "5",
    name: "Cold Coffee",
    description: "Our signature cold coffee topped with vanilla ice cream.",
    price: 70,
    image: "https://lorcoffee.com/cdn/shop/articles/Dark-Chocolate-Ice-Coffee-with-Provocateur-exc.jpg?v=1675806078",
    rating: 4.6,
    category: "beverage"
  },
  {
    id: "6",
    name: "Pista Kulfi",
    description: "Traditional Indian ice cream rich in pistachios and cardamom.",
    price: 60,
    image: "https://static.toiimg.com/thumb/84786580.cms?width=1200&height=900",
    rating: 4.7,
    category: "ice-cream",
    isPopular: true
  },
  {
    id: "7",
    name: "Fruit Salad with Ice Cream",
    description: "Fresh seasonal fruits topped with a scoop of vanilla ice cream.",
    price: 110,
    image: "https://media.istockphoto.com/id/174849692/photo/ice-cream-and-fruits.jpg?s=612x612&w=0&k=20&c=ExH1Ui9CHYH5kHYtJplLUZIipWnYBTMhLx9Y6iwvIKE=",
    rating: 4.4,
    category: "dessert"
  },
  {
    id: "8",
    name: "Butterscotch Sundae",
    description: "Butterscotch ice cream loaded with caramelized nuts and butterscotch sauce.",
    price: 130,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk_98sTg4nwd2jHm6CSgQyeHYuTLr4Zl4QA&s",
    rating: 4.6,
    category: "sundae"
  },
  {
    id: "9",
    name: "Rose Milk Shake",
    description: "Refreshing rose flavored milkshake topped with rose ice cream.",
    price: 85,
    image: "https://t4.ftcdn.net/jpg/06/77/48/57/360_F_677485726_HnSvEvPTh1S7M0uoPzSic8t4epXIjBrW.jpg",
    rating: 4.3,
    category: "beverage",
    isNew: true
  },
  {
    id: "10",
    name: "Classic Banana Split",
    description: "Traditional banana split with three flavors of ice cream, nuts, and chocolate sauce.",
    price: 150,
    image: "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage108081055-65-banana-split-high-res.jpg",
    rating: 4.8,
    category: "sundae",
    isNew: true
  },
  // New products based on the categories provided
  {
    id: "11",
    name: "Tiramisu Ice Cream",
    description: "Premium coffee-flavored ice cream layered with mascarpone cream and cocoa powder.",
    price: 180,
    image: "https://www.foodandwine.com/thmb/bnBMkLwg5vxgnL6lxWvrYZ9HF04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tiramisu-Sundae-FT-RECIPE0823-1c187b76c45b40d2a3ba9210bdfef5f0.jpg",
    rating: 4.9,
    category: "premium",
    isNew: true
  },
  {
    id: "12",
    name: "Marzi Paan",
    description: "A unique blend of traditional paan flavors with creamy ice cream.",
    price: 95,
    image: "https://i.redd.it/2poawy6podh91.jpg",
    rating: 4.6,
    category: "ice-cream",
    isNew: true
  },
  {
    id: "13",
    name: "i Pizza",
    description: "A sweet twist on pizza - ice cream base with candy and chocolate toppings.",
    price: 220,
    image: "https://aroundmangalore.com/wp-content/uploads/2017/11/I-Pizza-%E2%80%93-The-Ice-Cream-Pizza-Ideal-Ice-Cream-Mangalore.jpg",
    rating: 4.7,
    category: "dessert",
    isNew: true
  },
  {
    id: "14",
    name: "Candy Stick Assortment",
    description: "A bundle of colorful ice cream sticks with various fruit flavors.",
    price: 60,
    image: "https://tiimg.tistatic.com/fp/1/007/563/stick-type-candy-ice-cream-with-all-tasty-flavours-5-days-shelf-life-564.jpg",
    rating: 4.5,
    category: "candy"
  },
  {
    id: "15",
    name: "Dark Chocolate Family Pack",
    description: "1.5 Liter container of premium dark chocolate ice cream made with real Belgian chocolate.",
    price: 280,
    image: "https://www.idealicecream.com/wp-content/uploads/2024/04/chocolate-flavour.png",
    rating: 4.8,
    category: "family-pack"
  },
  {
    id: "16",
    name: "Low 'N' Lite Vanilla",
    description: "Sugar-free vanilla ice cream perfect for health-conscious dessert lovers.",
    price: 150,
    image: "https://thebusybaker.ca/wp-content/uploads/2019/05/best-ever-no-churn-vanilla-ice-cream-fb-ig-2.jpg",
    rating: 4.4,
    category: "sugar-free"
  },
  {
    id: "17",
    name: "Fresh Strawberry Cone",
    description: "Real strawberry ice cream in a crispy waffle cone, made with fresh seasonal fruits.",
    price: 80,
    image: "https://www.cookingmamas.com/wp-content/uploads/2019/06/Strawberry-Shortcake-Cones-3.jpg",
    rating: 4.7,
    category: "cone",
    isPopular: true
  },
  {
    id: "18",
    name: "Mango Family Pack",
    description: "1 Liter pack of mango ice cream, perfect for sharing.",
    price: 250,
    image: "https://tiimg.tistatic.com/fp/1/007/776/-thickness-rich-and-creamy-frozen-dessert-delicious-mango-ice-cream--211.jpg",
    rating: 4.9,
    category: "family-pack",
    isPopular: true
  },
  {
    id: "19",
    name: "i Thaali",
    description: "An assortment of mini ice cream servings in various flavors, served in a traditional thali setup.",
    price: 320,
    image: "https://pbs.twimg.com/media/FJN-emPacAIhLux.jpg",
    rating: 4.9,
    category: "premium",
    isNew: true
  },
  {
    id: "20",
    name: "Buy One Get One Pack",
    description: "700ml pack of our signature vanilla and chocolate ice cream with a free 700ml pack.",
    price: 300,
    image: "https://www.idealicecream.com/wp-content/uploads/2024/05/standard-500ml-product-ftrd.png",
    rating: 4.6,
    category: "family-pack"
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

// Special offers
export const offers = [
  {
    id: "1",
    title: "Happy Hours: 2PM - 4PM",
    description: "Get 20% off on all ice creams during happy hours!",
    code: "HAPPY20",
    validUntil: "2023-12-31",
  },
  {
    id: "2",
    title: "Family Pack Special",
    description: "Buy 4 ice creams and get 1 free. Perfect for family outings!",
    code: "FAMILY5",
    validUntil: "2023-12-31",
  },
  {
    id: "3",
    title: "Student Discount",
    description: "Show your student ID and get 15% off on your order.",
    code: "STUDENT15",
    validUntil: "2023-12-31",
  },
  {
    id: "4",
    title: "Seasonal Special: Mango Festival",
    description: "Try our limited-time mango special desserts at special prices.",
    code: "MANGO25",
    validUntil: "2023-06-30",
  },
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
