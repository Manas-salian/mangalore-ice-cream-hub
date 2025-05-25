const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Inventory Management System API',
        endpoints: {
            products: {
                create: 'POST /api/products',
                getAll: 'GET /api/products',
                getOne: 'GET /api/products/:id',
                update: 'PUT /api/products/:id',
                delete: 'DELETE /api/products/:id',
                restock: 'POST /api/products/:id/restock'
            }
        }
    });
});

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});