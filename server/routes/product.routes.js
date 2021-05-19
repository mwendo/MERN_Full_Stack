const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/new', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:_id', ProductController.getProduct);
    app.put('/api/product/update/:_id', ProductController.updateProduct);
    app.delete('/api/product/delete/:_id', ProductController.deleteProduct);
}