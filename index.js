require('dotenv').config()
const { urlencoded } = require('express');
// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)

const movieRouter = require('./routes/movies');
const apimovieRouter = require('./routes/apimovies');
const apiMoviesMongo = require('./routes/moviesMongodb');

const notFound = require('./middlewares/notFound');

const app = express() // Inicializa el servidor. App es un bjeto que representa el server

const port = process.env.PORT || 5000;

// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.urlencoded())
app.use(express.static('./utils'));

app.use(express.json()); // Para habilitar recepción de datos JSON en una request

app.use("/",movieRouter);
app.use("/api",apimovieRouter);
app.use("/api",apiMoviesMongo);

app.use(notFound);

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = server;