require('dotenv').config()
const { urlencoded } = require('express');
// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)

const movieRouter = require('./routes/movies');

const notFound = require('./middlewares/notFound');

const app = express() // Inicializa el servidor. App es un bjeto que representa el server
console.log("cambio para prueba");
const port = process.env.PORT
// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded())


app.use(express.json()); // Para habilitar recepción de datos JSON en una request


app.use("/",movieRouter);


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
app.use(notFound);
//console.log("hola");

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = server;