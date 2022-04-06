// // const { Pool } = require('pg');
// const res = require('express/lib/response');
// let pg =  require('pg');
// const elephantUrl = 'postgres://qecjoqju:ckJi_YdEkWDuwQlpWQTDX8uxHFy52DTn@manny.db.elephantsql.com/qecjoqju'
// let client = new pg.Client(elephantUrl);

// const res = require('express/lib/response');
// const { connectionString } = require('pg/lib/defaults');
const pool = require('../utils/postgreSQL')

const getUsers = async () => {
   
    let result;
    let connection
    try{
        
        connection = await pool.connect(); // Espera a abrir conexion
        const data = await pool.query(`Select * from users`)
       
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        connection.release();
    }
    return result
}


// const pool = new Pool({
//     host: process.env.PG_HOST,
//     user: process.env.USER,
//     database: 'postgres',
//     password: process.env.PG_PASSWORD,
//   })

const createUser = async (user) => {
        console.log(user)
        let result, client;
        const {username, password, email} = user
        try{
            client = await pool.connect(); // Espera a abrir conexion
            const data = await pool.query(`INSERT INTO users(username,password,email) 
                                        VALUES ($1,$2,$3)`
                                        ,[username,password,email])
            result = data.rowCount
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            client.release();
        }
        return result
}

const insertMovieFav = async (moviesFav) => {
    console.log(user)
    let id = req.params.id
    const {movie_id} = moviesFav;
    let result, client;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await pool.query(`INSERT INTO moviesFav(movie_id) 
                                        VALUES ($3)`
            ,[movie_id])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}
// DELETE 
// //UPDATE

const movies = {

    createUser,
    insertMovieFav
}

module.exports = elephant;
