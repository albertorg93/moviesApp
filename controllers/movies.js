const movies = require('../utils/movies.js');
const user = require('../models/movies.js');
//const fetch = require('node-fetch')
const db = require('../models/movies.js');

const start = async (req,res) => {
       
      res.status(200).render('formulario'); // Pinta datos en el pug
 
}

// const inicioSesion = async (req,res) => {
//   const email = req.body.email
//   const pass = req.body.pass
//   // console.log(email)
//   // console.log(pass)
//   // console.log(pass2)
//   const response = await db.logIn(email,pass);
//   res.status(200).send('todo correcterrr'); // Pinta datos en el pug

// }

const signup = async (req,res) => {
       
  res.status(200).render('signUp'); // Pinta datos en el pug

}

const dashboard = async (req,res) => {
       
  res.status(200).render('dashboard'); // Pinta datos en el pug

}

const searcher = async (req,res) => {
       
  res.status(200).render('searcher'); // Pinta datos en el pug

}


const getMovies = async (req,res) => {
       if (req.params.title) {     
         const title = await movies.getMovieByTitle(req.params.title); // Devuelve 1
        // console.log(title)
         res.status(200).render('pruebapelis', { films: title }); // para ver pelis aproximadas
         //res.status(200).render('viewMovie', { films: title }); // Para ver peli por titulo
        }// else {
      //    const allProducts = await products.getAllProducts();
      //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
      //  }
      }

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

        res.status(200).send('todo super correcto'); // Pinta datos en el pug
      
      }
  





   const movie = {
    start,
    //inicioSesion,
    signup,
    dashboard,
    searcher,
    getMovies,
    myMovies,
    crearUsuario
  }
   module.exports = movie;