const express = require('express');
const router = express.Router();

const movies = require('../controllers/apimovies');

router.get('/search',movies.apisearcher);

module.exports = router;