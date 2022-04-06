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

       //resultstitle.push(results)
      //console.log(results)
      // res.render('movie.pug', {films: title})
       console.log(results)
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


const addFavoriteMovie = async (id) => {
  try {
      
      let response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=8b15a7f2`); //{}
      let results2 = await response.json(); //{}
      
     // console.log(title)
     // res.render('movie.pug', {films: title})
      return results2;
    }
     catch (error) {
      console.log(`ERROR: ${error.stack}`);
      return [];
    }
 }

 const viewFavorites = async (req,res,arr) => {
    
    console.log(arr,"hola desde viewFavorites en utils")
  try {
    let arr2 =[]
      for(let i=0;i<arr.length;i++){
        // console.log(arr[i])
      let response = await fetch(`https://www.omdbapi.com/?i=${arr[i]}&apikey=8b15a7f2`); //{}
      let results2 = await response.json(); //{}
        arr2.push(results2)
      }
     // console.log(arr2)


     // res.render('myMovies.pug', {films: title})
      return arr2;
    }
     catch (error) {
      console.log(`ERROR: ${error.stack}`);
      return [];
    }
 }



  const movies = {
   getMovieByTitle,
   getMovieByTitleBeg,
   addFavoriteMovie,
   viewFavorites

 }
  module.exports = movies