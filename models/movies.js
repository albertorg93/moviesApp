const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: 'bootcamp'
  })

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

    


  const createUser = async (email,pass,pass2) => {
    //const {title,content,email,category} = entry;
        console.log(email)
        console.log(pass)
        console.log(pass2)
        console.log("pues parece que tira")
        let client,result;

        if(pass == pass2){
        try{
            client = await pool.connect(); // Espera a abrir conexion
            const data = await client.query(`INSERT INTO users(username,password) 
                                        VALUES ($1,$2)`
                                        ,[email,pass])
            result = data.rowCount
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            client.release();    
        }
        return result
    } else {
        console.log("es necesario que las passwords sean iguales");
    }
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