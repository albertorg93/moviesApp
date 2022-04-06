const express = require('express');
const router = express.Router();

const movies = require('../controllers/movies');
//const hasApiKey = require('../middlewares/hasApiKey');

/***********SECCIÓN ENTRIES**********/
// GET entries by Email
// GET http://localhost:3000/entries?email=alejandru@thebridgeschool.es

// GET all entries
// GET http://localhost:3000/api/entries


// POST --> Create Entry
// POST http://localhost:3000/api/entries --> endpoint para mandar objeto entry nueva
//router.post('/entries',hasApiKey,entries.createEntry);

// DELETE
// router.delete('/entries',entries.deleteEntries);
// UPDATE
//router.put('/entries',entries.updateEntries);

//se debe añadir comprobacion para verificar que es usuario
//********APP PELICULAS--VISTA USUARIO****** */
router.get('/',movies.start);
router.get('/signup',movies.signup);
router.get('/dashboard',movies.dashboard);
router.get('/search',movies.searcher);
router.get('/search/:title?',movies.getMovies);
router.get('/movies',movies.myMovies);


//*********POST */
// router.post('/login',movies.inicioSesion);
router.post('/signup',movies.createUser);


//********APP PELICULAS--VISTA ADMINISTRADOR****** */
//se debe añadir funcion autenticacion para comprobar que es administrador
router.get('/movies',movies.adminMovie);
router.get('/createMovie',movies.crearMovie);
router.post('/createMovie',movies.createMovie);
router.get('/editMovie/:id',movies.editarMovie);
//router.put('/editMovie/:id',movies.editMovie);
router.delete('/removeMovie',movies.deleteMovie);


module.exports = router;