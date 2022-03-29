 const fetch = require('node-fetch')
const getMovieByTitle = async (title) => {
    try {
        console.log(title)
        let response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=8b15a7f2`); //{}
        let titulo = await response.json(); //{}
       // console.log(title)
       // res.render('movie.pug', {films: title})
        return titulo;
      }
       catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return [];
      }
}

   const movies = {
    getMovieByTitle,

  }
   module.exports = movies;