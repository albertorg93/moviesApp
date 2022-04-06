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


const Insertmovieid = async (req, res,dato) => {
    let value=req.headers.cookie
      let valor = value.split(';').map(c=>c.split('=')) 
      let user1 = valor[2][1]
      console.log(user1)
      console.log(dato)
    // const { number } = req.body.id

     let client, result;
        try {
            client = await pool.connect(); // Espera a abrir conexion
            const inser = await client.query
                (`INSERT INTO favmovies(user_id,movie_id) VALUES ($1,$2)`
                    , [user1, dato])
            console.log(inser)
            result = { msg: "Pelicula agregada." }
    } catch (err) {
        console.log(err);
        // if (err.code == 23505) {
        //     result = { msg: "Usuario ya registrado." };
        // }
    } finally {
        client.release();
    }
     return result
}


const selectFavorites = async (req, res) => {
    let value=req.headers.cookie
      let valor = value.split(';').map(c=>c.split('=')) 
      let user1 = valor[2][1]
    // const { number } = req.body.id

     let client, result;
        try {
            client = await pool.connect(); // Espera a abrir conexion
            const resultado = await client.query
                (`select movie_id from favmovies where user_id=$1`
                    ,[user1])
           
            result = resultado.rows
    } catch (err) {
        console.log(err);
        // if (err.code == 23505) {
        //     result = { msg: "Usuario ya registrado." };
        // }
    } finally {
        client.release();
    }
     return result
}

// const pool = new Pool({
//     host: process.env.PG_HOST,
//     user: process.env.USER,
//     database: 'postgres',
//     password: process.env.PG_PASSWORD,
//   })

//=====================
//   const logIn = async (email,pass) => {
//     //const {title,content,email,category} = entry;
//         // console.log(email)
//         // console.log(pass)
//         // console.log(pass2)
//         // console.log("pues parece que tira")
//         let client,result;
//         console.log(pass, +"es una prueba")
      
//         try{
//             client = await pool.connect(); // Espera a abrir conexion
//             const data = await client.query(`select email,password from users 
//                                         where username=$1`
//                                         ,[email])
//             result = data.rowCount
//             console.log(result)
//         }catch(err){
//             console.log(err);
//             throw err;
//         }finally{
//             client.release();    
//         }
//         return result
//         }
//

//
//================
    


//   const createUser = async (user) => {
//         console.log("pues parece que tira")
//         let result;
//         const {username, password, email} = user
//         try{
//             await client.connect(); // Espera a abrir conexion
//             const data = await client.query(`INSERT INTO users(username,password,email) 
//                                         VALUES ($1,$2,$3)`
//                                         ,[username,password,email])
//             result = data.rowCount
//         }catch(err){
//             console.log(err);
//             throw err;
//         }finally{
//             client.end();
//         }
//         return result
// }

// DELETE 
// //UPDATE

// const movies = {
//    // getEntriesByEmail,
//    // getAllEntries,
//   // logIn,
//     createUser,
//     getUsers
//     //deleteEntry
//     //updateEntry
// }


const elephant = {
  getUsers,
  Insertmovieid,
  selectFavorites
}

module.exports = elephant;
