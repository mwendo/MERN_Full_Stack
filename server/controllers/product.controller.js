const {Person, Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: "ERROR! YOU LITERALLY SUCK GET GOOD KID!"}));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({product: allProducts}))
        .catch(err => res.json({message: "ERROR! YOU LITERALLY SUCK GET GOOD KID!"}));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json({product: oneProduct}))
        .catch(err => res.json({message: "ERROR@ YOU LITERALLY SUCK GET GOOD KID!"}))
}