const fetch = require('node-fetch')

//const movie = require('../public/js/main.js');
const getMovieByTitle = async (title) => {
   try {
       //console.log(title)
      
       let response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=8b15a7f2`); //{}
       let titulo = await response.json();
       let results = titulo.Search; //{}
      console.log(results)
      // res.render('movie.pug', {films: title})
       return results;
     }
      catch (error) {
       console.log(`ERROR: ${error.stack}`);
       return [];
     }
}
//let movie=document.getElementById("search").value
const getMovieByTitleBeg = async (req,res) => {
 try {
     
     let response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=8b15a7f2`); //{}
     let titulo = await response.json(); //{}
     let results = titulo.Search;
    // console.log(title)
    // res.render('movie.pug', {films: title})
     return results;
   }
    catch (error) {
     console.log(`ERROR: ${error.stack}`);
     return [];
   }
}

  const movies = {
   getMovieByTitle,
   getMovieByTitleBeg

 }
  module.exports = movies