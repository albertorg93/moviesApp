const movies = require('../utils/movies.js');
const user = require('../models/movies.js');
//const fetch = require('node-fetch')
const db = require('../models/movies.js');

// const start = async (req,res) => {
       
//       res.status(200).render('formulario'); // Pinta datos en el pug
 
// }


const apisearcher = async (req,res) => {
       
    console.log(req.query.search)
    res.status(200).render('formulario'); // Pinta datos en el pug

}


   const movie = {
    //start,
    apisearcher
    //inicioSesion,
    // signup,
    // dashboard,
    // searcher,
    // getMovies,
    // myMovies,
    // crearUsuario
  }
   module.exports = movie;