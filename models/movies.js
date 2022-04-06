// const { Pool } = require('pg');
// let pg =  require('pg');
// const elephantUrl = 'postgres://qecjoqju:ckJi_YdEkWDuwQlpWQTDX8uxHFy52DTn@manny.db.elephantsql.com/qecjoqju'
// let client = new pg.Client(elephantUrl);
const pg = require('pg')
const { Pool } = pg;

let localPoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};
const poolConfig = process.env.ELEPHANT_URL

    ? {
        connectionString: process.env.ELEPHANT_URL,
        ssl: { rejectUnauthorized: false },
    }
    : localPoolConfig;

const pool = new Pool(poolConfig);

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
//UPDATE

const movies = {

    createUser,
    insertMovieFav
}

module.exports = movies;