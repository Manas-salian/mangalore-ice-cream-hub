# Inventory Management System

A backend REST API for managing product inventory, built with Node.js, Express, and MongoDB.

## Features

- Create, Read, Update, and Delete products
- Real-time inventory tracking
- Low stock alerts
- Product restocking functionality
- MongoDB integration for data persistence

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017

4. Start the server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## API Endpoints

### Products

- **POST /api/products** - Create a new product
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "quantity": 100,
    "lowStockThreshold": 10
  }
  ```

- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a specific product
- **PUT /api/products/:id** - Update a product
- **DELETE /api/products/:id** - Delete a product
- **POST /api/products/:id/restock** - Restock a product
  ```json
  {
    "quantity": 50
  }
  ```

## Error Handling

The API includes comprehensive error handling for:
- Invalid requests
- Not found resources
- Server errors

## Low Stock Alerts

The system automatically logs alerts when product quantity falls below the specified threshold.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
