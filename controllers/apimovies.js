const movies = require('../utils/movies.js');
const scraperpeli = require('../utils/scraper1.js');



//const fetch = require('node-fetch')
const scrapmovies=async(req,res)=>{
  let movie=req.params.title
  let resultscraper=await scraperpeli.Scraperbymovie(movie)
  console.log(resultscraper);
  res.status(200).render('pelidetallada',{resultscraper})
}








const getMovies = async (req,res) => {
     let movie = req.params.title
     let results = await movies.getMovieByTitle(movie); // Devuelve 1
     // console.log(title)
     
      res.status(200).render('pruebapelis', {results });
       // Pinta datos en el pug
     // else {
   //    const allProducts = await products.getAllProducts();
   //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
   //  }
   }
   
const moviedetail = async (req,res) => {
    let movie = req.params.title
    console.log(movie)
    let results1 = await movies.getMovieByTitleBeg(movie); // Devuelve 1
    
    // console.log(title)
     res.status(200).render('pelidetallada', {results1});
      // Pinta datos en el pug
//     else {
//      const allProducts = await products.getAllProducts();
//      res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
//   }
  }

  
  // const moviedetail1 = async (req,res) => {
  //   let movie = req.params.title
  //   //console.log(movie)
  //   let results1 = await movies.getMovieByTitleBeg(movie); // Devuelve 1
  //   console.log(results1)
  //   // console.log(title)
  //    res.status(200).render('pruebapelis', {results1}); 
  // }

   const movieApi = {
    getMovies,
    moviedetail,
    scrapmovies
  }

  module.exports = movieApi;

