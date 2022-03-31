const fetch = require('node-fetch')
//resultstitle=[]


//const movie = require('../public/js/main.js');
const getMovieByTitle = async (title) => {
   try {
       //console.log(title)
      
       let response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=8b15a7f2`); //{}
       let titulo = await response.json();
       let results = titulo.Search; //{}
      //  let response1 = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=8b15a7f2`); //{}
      //  let results2 = await response1.json(); //{}
      //  const results = {...results1, ...results2 }
       console.log(results);

       //resultstitle.push(results)
      //console.log(results)
      // res.render('movie.pug', {films: title})

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
     
     let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=8b15a7f2`); //{}
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