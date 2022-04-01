// const { Pool } = require('pg');
let pg =  require('pg');
const elephantUrl = 'postgres://qecjoqju:ckJi_YdEkWDuwQlpWQTDX8uxHFy52DTn@manny.db.elephantsql.com/qecjoqju'
let client = new pg.Client(elephantUrl);

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
    


  const createUser = async (user) => {
        console.log("pues parece que tira")
        let result;
        const {username, password, email} = user
        try{
            await client.connect(); // Espera a abrir conexion
            const data = await client.query(`INSERT INTO users(username,password,email) 
                                        VALUES ($1,$2,$3)`
                                        ,[username,password,email])
            result = data.rowCount
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            client.end();
        }
        return result
}

// DELETE 
//UPDATE

const movies = {
   // getEntriesByEmail,
   // getAllEntries,
  // logIn,
    createUser,
    //deleteEntry
    //updateEntry
}

module.exports = movies;