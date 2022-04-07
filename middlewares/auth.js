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
  //   console.log(prueba)
  //  let valor=prueba.split("=")
  //  let resul = valor[1]
  //  console.log(resul)
  //  const token = resul
  // // console.log(token)
  let valor = prueba.split(';').map(c=>c.split('=')) 
 // let rol = valor[0][1]
  let token = valor[0][1]
  console.log(token,"este es el token")
  //console.log(tok,"hola desde tok")
  //console.log(ro,"hola desde ro")
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