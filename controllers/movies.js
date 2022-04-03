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
 
 //clave privada del servidor
 //guardar la clave en la BBDD  
 key=process.env.KEY
const config = {  
	llave : key 
};
app.set('llave', config.llave);


const start = async (req,res) => {
       
      res.status(200).render('formulario'); // Pinta datos en el pug
 
}

const signup = async (req,res) => {
       

  res.status(200).render('signUp'); // Pinta datos en el pug

}

const login = async (req,res) => {
       

  res.status(200).render('login'); // Pinta datos en el pug

}

const loginauth = async (req,res) => {
  console.log(req.body)
  if(req.body.usuario === "alex" && req.body.contrasena === "123456") {
		const payload = {
			check:  true
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: "30000ms"
		});
		//   res.json({
		//   	mensaje: 'Autenticación correcta',
		//   	token: token
		// });
       res
       .cookie("acces_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({mensaje: "autenticacion correcta"})

    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }  
  //res.status(200).render('login'); // Pinta datos en el pug

}


const dashboard = async (req,res) => {
       
  res.status(200).render('dashboard'); // Pinta datos en el pug

}

const searcher = async (req,res) => {
  //const movie = await movies.getMovieByTitleBeg(); 
   
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

        const listMovies = await creaMov.find() 
        res.status(200).render('manageMovies', {listMovies}); // Muestra la vista del admin para crear, editar y eliminar peliculas
      
      }

        const createUser = async (req, res) => {
            try {
                let datos = await user.createUser(req.body);
                res.status(201).json(datos);
            } catch (error) {
                console.log(`ERROR: ${error.stack}`);
            }
        };


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
        
        res.status(201).json({message:`Película ${response.title} guardada en el sistema con ID: ${response.id}`});
        } catch(err){
            res.status(400).json({message:err});
        }


       //funcion necesaria para crear una peli mediante POST
     
      
      }


      const editarMovie = async (req,res) => {
        const editPeli = await creaMov.find({title: req.params.id})  
        res.status(200).render('editapeli', {editPeli}); // Pinta la pagina para editar peliculas en modo administrador
      
      }

        //funcion necesaria para editar una peli mediante PUT
      // const editMovie = async (req,res) => {
      //     await creaMov.updateOne({ id: xxx }, {
      //     title: 'King in the North',
      //     image: "https://i.pravatar2.jpg",
      //     year: 2005,
      //     director: "ford coppola",
      //     genre: "comedy",
      //     runtime: "115 min"
      //   });
        
      //}

      const deleteMovie = async (req,res) => {
        //funcion necesaria para borrar una peli mediante DELETE
    }


   const movie = {
    start,
    signup,
    login,
    loginauth,
    dashboard,
    searcher,
    getMovies,
    myMovies,
    crearUsuario,
    adminMovie,
    crearMovie,
    createMovie,
    editarMovie,
    //editMovie,
    deleteMovie,
    moviedetail,
    createUser
    //moviedetail1
  }
   module.exports = movie;


  