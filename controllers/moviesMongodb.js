const paraNada = require('../utils/dbMongo')

const Movie = require("../models/moviesMongodb")


// const getMovies = async (req,res) => {
//     if (req.params.id) {
//         const movie = await Movie.find({id:req.params.id}); // Devuelve 1
//         res.status(200).json(movie); // Pinta datos en el pug
//     } else {
//         const allMovies = await Movie({});
//         res.status(200).json(allMovies); // Pinta datos en el pug
//     }
// }

const createMovie = async (req, res) => {
    try {
        const peli = new Movie(req.body);
        const result = await peli.save();
        console.log("Movie created");
        console.log(result);
        res.status(201).json(result);
        // res.status(201).json({message: `Película ${answer.title} guardada en el sistema con ID: ${answer.id}`});
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
 



//const editMovie = ...
//const deleteMovie = ...

const movie = {
    // getMovies,
    createMovie,
    //editMovie,
    //deleteMovie
}
module.exports = movie;