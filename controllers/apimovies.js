const movies = require("../utils/movies.js");
const ScraperTools = require("../utils/scraper1.js");
const scrapmovies = async (req, res) => {
  let movie = req.params.title;
  let results1 = await ScraperTools.scraperByMovie(movie);
  res.status(200).render("pelidetallada", { results1 });
};
const getMovies = async (req, res) => {
  let movie = req.params.title;
  let results = await movies.getMovieByTitle(movie); // Devuelve 1
  res.status(200).render("pruebapelis", { results });
};
const moviedetail = async (req, res) => {
  let movie = req.params.title;
  // let results1 = {
  //   pelicula: {},
  //   comentarios: {}
  //  }
  const pelicula = await movies.getMovieByTitleBeg(movie); // Devuelve 1
 const comentarios = await ScraperTools.scraperByMovie(movie);
  const results1={pelicula,comentarios}
  res.status(200).render("pelidetallada", {results1});
};
const movieApi = {
  getMovies,
  moviedetail,
  scrapmovies,
};
module.exports = movieApi;