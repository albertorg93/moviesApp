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
  let prueba=req.headers.cookie
  let valor = prueba.split(';').map(c=>c.split('=')) 
  let token = valor[0][1]
  console.log(token,"este es el token")
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