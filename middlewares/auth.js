const express = require('express');
const app = express()
const jwt = require('jsonwebtoken');

key=process.env.KEY
const config = {  
	llave : key 
};
app.set('llave', config.llave);
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
   // const token = req.headers['access_token'];
	// console.log(req.headers.cookie)nanpm
   let prueba=req.headers.cookie
   let valor=prueba.split("=")
   let resul = valor[1]
   const token = resul
  console.log(token)
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      }); 
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

 module.exports = rutasProtegidas;