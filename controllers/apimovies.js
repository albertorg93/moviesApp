const movies = require("../utils/movies.js");
const ScraperTools = require("../utils/scraper1.js");

//const fetch = require('node-fetch')
const scrapmovies = async (req, res) => {
  let movie = req.params.title;
  let results1 = await ScraperTools.scraperByMovie(movie);
  //console.log(results1);
  console.log(movie,"esta es la movie");
  res.status(200).render("pelidetallada", { results1 });
};

const getMovies = async (req, res) => {
  let movie = req.params.title;
  let results = await movies.getMovieByTitle(movie); // Devuelve 1
  // console.log(title)

  res.status(200).render("pruebapelis", { results });
  // Pinta datos en el pug
  // else {
    //    const allProducts = await products.getAllProducts();
    //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
    //  }
  
};

const moviedetail = async (req, res) => {
  let movie = req.params.title;
  console.log("esta es la pelicula con comentarios",movie);
  let results1 = {
    pelicula: {},
    comentarios: {}
   }
  results1.pelicula = await movies.getMovieByTitleBeg(movie); // Devuelve 1
  results1.comentarios = await ScraperTools.scraperByMovie(movie);
  
    console.log(results1);  
  // console.log(title)
  res.status(200).render("pelidetallada", {results1});
  // Pinta datos en el pug
  //     else {
  //      const allProducts = await products.getAllProducts();
  //      res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
  //   }
  
};










const movieApi = {
  getMovies,
  moviedetail,
  scrapmovies,
  
};

module.exports = movieApi;
