const express = require('express');
const router = express.Router();

const movies = require('../controllers/apimovies');
const scraperpeli = require('../controllers/apimovies');


//Rutas de la Api
router.post('/search')
router.get('/search/:title?',movies.getMovies);
router.get('/search/detalle/:title?',movies.moviedetail);
router.get('/search/:title?',scraperpeli.scrapmovies);

module.exports = router;