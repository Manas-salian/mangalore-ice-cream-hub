# Mangalore Ice Cream Hub

A modern web application for an ice cream business based in Mangalore, featuring a catalog of local ice cream specialties, promotional offers, and online ordering capabilities.

## Features

- **Product Catalog**: Browse a variety of ice cream products with detailed descriptions and images
- **Shopping Cart**: Add items to cart, adjust quantities, and proceed to checkout
- **Special Offers**: View current promotions and discounts
- **Spin & Win Game**: Interactive wheel game that allows customers to win discount coupons
- **Store Locations**: Find nearby ice cream outlets
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mangalore-ice-cream-hub.git

# Navigate to the project directory
cd mangalore-ice-cream-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Technologies Used

- **Frontend Framework**: React.js
- **UI Framework**: React Bootstrap
- **Styling**: CSS with Bootstrap classes
- **Routing**: React Router
- **State Management**: React Hooks and Context API
- **Notifications**: Sonner Toast
- **Package Manager**: npm
- **Build Tool**: Vite

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Main application pages
- `src/lib`: Data and utility functions
- `src/hooks`: Custom React hooks

## Features Highlight

### Spin & Win Component

The application includes a special promotional feature that allows users to spin a wheel and win discount coupons:

- Interactive spinning wheel with physics-based animation
- Random prize selection
- Time-limited usage (once per day)
- Coupon code generation and storage
- Mobile-responsive design

### Product Catalog

- Categorized ice cream products
- Detailed product information
- Rating system
- Image display with fallback support
- Add to cart functionality

## Development

To run the application in development mode:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
