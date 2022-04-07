require('dotenv').config()
const movies = require('../utils/movies.js');
const user = require('../models/movies.js');
const authen = require('../middlewares/auth');
//const fetch = require('node-fetch')
const Cookies=require('js-cookie')
const db = require('../models/movies.js');
const express = require('express'); // Importando módulo NPM (libería)
const app = express()
const jwt = require('jsonwebtoken') //importamos Jason Web Token
const cookieParser = require('cookie-parser')
app.use(cookieParser())
let pg =  require('pg');
const { createUser } = require('../models/movies.js');
let rol = ''
 //clave privada del servidor0
 //guardar la clave en la BBDD  
 key=process.env.KEY
const config = {  
	llave : key 
};
app.set('llave', config.llave);




const signup = async (req,res) => {
 
  
    res.status(200).render('signUp'); // Pinta datos en el pug
  
  }


  const creaUser = async (req,res) => {
    const newuser = req.body.username
    const email = req.body.email
    const pass = req.body.pass
    const pass2 = req.body.pass2
    if (pass == pass2){
    const response = await user.createUser(newuser,email,pass);
    res.status(200).render('login');
    } else {
      res.json({ mensaje: "Las passwords deben ser iguales"})
    }
  //  // console.log(email)
  //  // console.log(pass)
  //  // console.log(pass2)
 
     // res.status(200).render('signUp'); // Pinta datos en el pug
    
    }

  
  const login = async (req,res) => {
    
  
  
    res.status(200).render('login'); // Pinta datos en el pug
  
  }
  
  const loginauth = async (req,res) => {
    let result = await user.getUsers()
     console.log(result)
      const { usuario, contrasena } = req.body;
      //console.log(usuario,contrasena)
  //   console.log(username)
      const user1 = result.find(u => { return u.username === usuario && u.password === contrasena && ( u.role == 'member' || u.role == 'admin')});
    //   console.log(user1.role)
    // document.cookie ="username=alberto"
    // if(req.body.usuario === "alex" && req.body.contrasena === "123456") {
  
      if(user1) {
          const payload = {
              check:  true,
          };
          const token = jwt.sign(payload, app.get('llave'), {
              expiresIn: "60000ms"
          });
  
      //esto va comentado******
          //   res.json({
          //   	mensaje: 'Autenticación correcta',
          //   	token: token
          // });
      //************** */
         res
         .cookie('access_token', token, {
          httpOnly: true,
        })
        .cookie('rol',user1.role)
        .cookie('id',user1.id_user)
        .status(200)
        .json({mensaje: "autenticacion correcta"})
        
      } else {
          res.json({ mensaje: "Usuario o contraseña incorrectos"})
      }  
 
   }
  
   //funcion para deslogar al usuario. eliminar las cookies y redirige a la pantalla
   //de inicio
   const logoutUser = async (req,res) => {
    
    res
    .cookie("access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT")
    .cookie("rol=; expires=Thu, 01 Jan 1970 00:00:01 GMT")
    .cookie("id=; expires=Thu, 01 Jan 1970 00:00:01 GMT")
    .status(200).redirect('/') 
  
  }
  

const users = {
 signup,
 creaUser,
 login,
 loginauth,
  logoutUser
}

module.exports = users