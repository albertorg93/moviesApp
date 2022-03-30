const express = require('express');
const router = express.Router();

const movies = require('../controllers/apimovies');

//Rutas de la Api
router.post('/search')
router.get('/search/:title?',movies.getMovies);














module.exports = router;