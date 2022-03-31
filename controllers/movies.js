const movies = require('../utils/movies.js');
const user = require('../models/movies.js');
//const fetch = require('node-fetch')
const db = require('../models/movies.js');

const start = async (req,res) => {
       
      res.status(200).render('formulario'); // Pinta datos en el pug
 
}

const signup = async (req,res) => {
       
  res.status(200).render('signUp'); // Pinta datos en el pug

}

const dashboard = async (req,res) => {
       
  res.status(200).render('dashboard'); // Pinta datos en el pug

}

const searcher = async (req,res) => {
  //const movie = await movies.getMovieByTitleBeg();     
  res.status(200).render('searcher'); // Pinta datos en el pug

}



const getMovies = async (req,res) => {

  //console.log(req)
   let results = await movies.getMovieByTitle(req.params.title); // Devuelve 1
    console.log(movie)
    res.status(200).render('pruebapelis', {results});; // Pinta datos en el pug
   
        //    const allProducts = await products.getAllProducts();
 //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
        //  }
 }
 const moviedetail = async (req,res) => {
  let movie = req.params.title
  console.log(movie)
  let results1 = await movies.getMovieByTitleBeg(movie); // Devuelve 1
  console.log(movies)
  // console.log(title)
   res.status(200).render('pelidetallada', {results1}); // Pinta datos en el pug
  // else {
//    const allProducts = await products.getAllProducts();
//    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
//  }
}
// const moviedetail1 = async (req,res) => {
//   let movie = req.params.title
//   console.log(movie)
//   let results1 = await movies.getMovieByTitleBeg(movie); // Devuelve 1
  
//   // console.log(title)
//    res.status(200).render('pruebapelis', {results1});
//     // Pinta datos en el pug
// //     else {
// //      const allProducts = await products.getAllProducts();
// //      res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
// //   }
// }
 


         const myMovies = async (req,res) => {
       
        res.status(200).render('myMovies'); // Pinta datos en el pug
      
      }
      
  
  
         const crearUsuario = async (req,res) => {
         const email = req.body.email
         const pass = req.body.pass
         const pass2 = req.body.pass2
          // console.log(email)
          // console.log(pass)
          // console.log(pass2)
          const response = await db.createUser(email,pass,pass2);

        res.status(200).send('todo super correcto'); // 
      
      }
  
      const adminMovie = async (req,res) => {
       
        res.status(200).render('manageMovies'); // Muestra la vista del admin para crear, editar y eliminar peliculas
      
      }



      const crearMovie = async (req,res) => {
       
        res.status(200).render('creaPeli'); // Pinta la pagina para crear peliculas
      
      }

      
      const createMovie = async (req,res) => {
       //funcion necesaria para crear una peli mediante POST
     
      
      }


      const editarMovie = async (req,res) => {
       
        res.status(200).render('editaPeli'); // Pinta la pagina para editar peliculas
      
      }

      const editMovie = async (req,res) => {
          //funcion necesaria para editar una peli mediante PUT
      }

      const deleteMovie = async (req,res) => {
        //funcion necesaria para borrar una peli mediante DELETE
    }


   const movie = {
    start,
    signup,
    dashboard,
    searcher,
    getMovies,
    myMovies,
    crearUsuario,
    adminMovie,
    crearMovie,
    createMovie,
    editarMovie,
    editMovie,
    deleteMovie,
    moviedetail,
    //moviedetail1
  }
   module.exports = movie;