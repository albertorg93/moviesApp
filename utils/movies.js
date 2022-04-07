const fetch = require('node-fetch')
const Product = require("../models/moviesMongodb");
//resultstitle=[]
require('dotenv').config();
const apikey=process.env.API_KEY;


//const movie = require('../public/js/main.js');
const getMovieByTitle = async (title) => {
   try {
       //console.log(title)
      
       let response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apikey}`); //{}
       let titulo = await response.json();
       if(titulo.Response==="False"){
          const moviesmongo= await Product.find({title}).exec()
          const moviesconvert=moviesmongo.map((movie)=>{
            return {
              
              Type:movie.genre,
              imdbID:movie._id,
              Title:movie.title,
              Year:movie.year,
              Poster:movie.image
              
            }
          })
          //console.log(moviesmongo);

         return moviesconvert
       }
       let results = titulo.Search;
      

       return results;
     }
      catch (error) {
       console.log(`ERROR: ${error.stack}`);
       return [];
     }
}
//console.log(resultstitle);
//let movie=document.getElementById("search").value
const getMovieByTitleBeg = async (title) => {
 try {
     
     let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`); //{}
     let results1 = await response.json(); //{}
     
    // console.log(title)
    // res.render('movie.pug', {films: title})
     return results1;
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