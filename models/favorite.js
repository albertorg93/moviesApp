let pg =  require('pg');
const elephantUrl = 'postgres://qecjoqju:ckJi_YdEkWDuwQlpWQTDX8uxHFy52DTn@manny.db.elephantsql.com/qecjoqju'
let client = new pg.Client(elephantUrl);





const createUser = async (user) => {
   
    let result;
    const {moviesfav_id, username, movie_id} = user
    try{
        await client.connect(); // Espera a abrir conexion
        const data = await client.query(`INSERT INTO moviesFav(moviesfav_id,username,movie_id) 
                                        VALUES ($1,$2,$3)`
            ,[moviesfav_id,username,movie])
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

const favorite = {
    createUser
}

module.exports = favorite;