require('dotenv').config()
const movies = require('../utils/movies.js');
const user = require('../models/movies.js');
const authen = require('../middlewares/auth');
//const fetch = require('node-fetch')
const creaMov = require('../models/moviesMongodb.js');
const db = require('../models/movies.js');
const express = require('express'); // Importando módulo NPM (libería)
const app = express()
const jwt = require('jsonwebtoken') //importamos Jason Web Token
const cookieParser = require('cookie-parser')
app.use(cookieParser())
let pg =  require('pg');
const Cookies=require('js-cookie')

 //clave privada del servidor0
 //guardar la clave en la BBDD  
 key=process.env.KEY
const config = {  
	llave : key 
};
app.set('llave', config.llave);


const start = async (req,res) => {
  
    res.status(200).render('formulario'); // Pinta datos en el pug
 
}


const dashboard = async (req,res) => {
       
  res.status(200).render('dashboard'); // Pinta datos en el pug

}

const searcher = async (req,res) => {
  
  res.status(200).render('searcher'); // Pinta datos en el pug

}



const getMovies = async (req,res) => {

   let results = await movies.getMovieByTitle(req.params.title); // Devuelve 1
    res.status(200).render('pruebapelis', {results});; // Pinta datos en el pug
   
        //    const allProducts = await products.getAllProducts();
 //    res.status(200).render('products', {"products":allProducts }); // Pinta datos en el pug
        //  }
 }
 const moviedetail = async (req,res) => {

  let movie = req.params.title
  let results1 = await movies.getMovieByTitleBeg(movie); // Devuelve 1
   res.status(200).render('pelidetallada', {results1}); // Pinta datos en el pug
 
}


         const myMovies = async (req,res) => {
          let nuevo=[]
        resul = await user.selectFavorites(req);
        let arr=[]
         for(let i=0;i<resul.length;i++){
         arr.push(resul[i].movie_id)
         }
       
         let datos = await movies.viewFavorites(req,res, arr);
        // console.log(datos,"estos son los datos")
          res.render('myMovies.pug', {datos})
         }
      
  
  
      const adminMovie = async (req,res) => {

        const listMovies = await creaMov.find() 
        res.status(200).render('manageMovies', {listMovies}); // Muestra la vista del admin para crear, editar y eliminar peliculas
      
      }

      


      const crearMovie = async (req,res) => {
        res.status(200).render('creaPeli'); // Pinta la pagina para crear peliculas en modo administrador
      
      }

      
      const createMovie = async (req,res) => {
         const newProduct = new creaMov(req.body); // {} nuevo producto a guardar
        // Líneas
        //para guardar 
        // en una BBDD SQL o MongoDB
      
        try{
        const response = await newProduct.save();
       // .json({message:`Película ${response.title} guardada en el sistema con ID: ${response.id}`})
        res.status(201).redirect('/movies');
        } catch(err){
            res.status(400).json({message:err});
        }
       //funcion necesaria para crear una peli mediante POST
      }


      const editarMovie = async (req,res) => {
        const editPeli = await creaMov.find({title: req.params.id}) 
        res.status(200).render('editapeli', {editPeli}); // Pinta la pagina para editar peliculas en modo administrador
      }


      const editMoviePut = async (req,res) => {

      const editarPeli = await creaMov.find({title: req.params.id}) 
      let change = req.body
      console.log(change,"esto es change")
      console.log(change.title,"esto es el title")
         
      let editedMovie = await creaMov.findOneAndUpdate({title: change.title, change});
      res.status(200).render('editapeli', {editedMovie})
       
      }
      
      

      const deleteMovie = async (req,res) => {
        console.log(req.params.id)
        const deletePeli = await creaMov.deleteOne({title: req.params.id})
        res.status(200).render('eliminapeli');
        //const editPeli = await creaMov.find({title: req.params.id}) 
        //funcion necesaria para borrar una peli mediante DELETE
    }

    const addFavorite = async (req,res) => {

     let added = await movies.addFavoriteMovie(req.params.id); 
     console.log(added.imdbID,"esto es el IMDBID")
     let dato = added.imdbID
     let datos = await user.Insertmovieid(req,res, dato);
     res.status(201).json({datos});
      //let result = await user.Insertmovieid()

  }


   const movie = {
    start,
    dashboard,
    searcher,
    getMovies,
    myMovies,
   // crearUsuario,
    adminMovie,
    crearMovie,
    createMovie,
    editarMovie,
    //editMovie,
    deleteMovie,
    moviedetail,
    //createUser,
    editMoviePut,
    addFavorite
    //moviedetail1
    //addfavourite
  }
   module.exports = movie;
