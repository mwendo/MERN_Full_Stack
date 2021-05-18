const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product: String,
    price: Number,
    description: String
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);