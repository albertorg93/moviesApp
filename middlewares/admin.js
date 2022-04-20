/**
 * @author Pedro Rodríguez <pedromrv>
 * @exports admin
 * @namespace middlewares
 */

/**
 * Descripción: Esta función es un middleware que compreba si eres admin
 * @memberof middlewares
 * @method admin
 * @async
 * @param {Object} req peticion http
 * @param {Object} res respuesta http
 * @param {Object} next función de callback para que el middleware termine de manera exitosa
 */
function admin(req,res,next){
  let value=req.headers.cookie
  let valor = value.split(';').map(c=>c.split('=')) 
  let rol = valor[1][1]
  console.log(rol,"este es el rol desde la vista de admin")
  if(rol=="admin"){
    next()
  } else {
    res.status(401).render('roleadmin.pug')
  }
  console.log(rol)
  
}

module.exports = admin;