const movies = require('../utils/movies.js');


//const fetch = require('node-fetch')


const getMovies = async (req,res) => {
     let movie = req.params.title
     movies = await movies.getMovieByTitle(movie); // Devuelve 1
     // console.log(title)
      res.status(200).render('pruebapelis', {movies}); // Pinta datos en el pug
     // else {
   //    const allProducts = await products.getAllProducts();
   //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
   //  }
   }
   const movieApi = {
    getMovies
  }

  module.exports = movieApi;

