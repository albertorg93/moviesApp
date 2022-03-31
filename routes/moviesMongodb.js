const express = require('express');
const router = express.Router();

const products = require('../controllers/moviesMongodb');




/*************SECCIÓN PRODUCTOS**********/



// /products/3
// /products
router.get('/products/:id?',products.getProduct);
router.post('/products', products.createProduct);

module.exports = router;
