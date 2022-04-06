const express = require('express');
const router = express.Router();

const movies = require('../controllers/movies');
const users = require('../controllers/users');
const authentication = require('../middlewares/auth');
const roleadmin = require('../middlewares/admin')
const rolemember = require('../middlewares/member')
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
// router.get('/signup',movies.signup);
// router.get('/login',movies.login);
router.get('/signup',users.signup);
 router.get('/login',users.login);
router.get('/dashboard',/*authentication ,rolemember,*/movies.dashboard);
router.get('/search',/* authentication ,rolemember ,*/movies.searcher);
router.get('/search/:title?',/*authentication ,rolemember,*/movies.getMovies);
router.get('/logout',users.logoutUser);
//router.get('/movies',movies.myMovies);


//*********POST */
// router.post('/login',movies.inicioSesion);
router.post('/signup',movies.createUser);
//router.post('/login',movies.loginauth);
router.post('/login',users.loginauth);  //loginauth

// router.post('/addfavourite',movies.Insertmovieid);
//********APP PELICULAS--VISTA ADMINISTRADOR****** */
//se debe añadir funcion autenticacion para comprobar que es administrador
router.get('/movies',/* authentication ,roleadmin,*/movies.adminMovie);
router.get('/createMovie',/*authentication ,roleadmin,*/movies.crearMovie);
router.post('/createMovie',/*authentication ,roleadmin,*/movies.createMovie);
router.get('/editMovie/:id',/*authentication ,roleadmin,*/movies.editarMovie);
//router.put('/editMovie/:id',movies.editMovie);
router.delete('/removeMovie',/*authentication ,roleadmin,*/movies.deleteMovie);


module.exports = router;