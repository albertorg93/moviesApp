const express = require('express');
const router = express.Router();

const movies = require('../controllers/moviesMongodb');




/*************SECCIÓN PRODUCTOS**********/



// /products/3
// /products
// router.get('/products/:id?',products.getMovie);
router.post('/products', movies.createMovie);

module.exports = router;
