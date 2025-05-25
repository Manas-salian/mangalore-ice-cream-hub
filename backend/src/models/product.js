const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    lowStockThreshold: {
        type: Number,
        default: 10
    }
}, {
    timestamps: true
});

// Middleware to check for low stock
productSchema.post('save', function() {
    if (this.quantity <= this.lowStockThreshold) {
        console.log(`Low stock alert: ${this.name} has only ${this.quantity} units left!`);
        // Here you could implement more sophisticated alerting mechanisms
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;