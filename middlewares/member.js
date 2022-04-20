/**
 * @author Pedro Rodríguez <pedromrv>
 * @exports member
 * @namespace middlewares
 */

/**
 * Descripción: Esta función es un middleware que compreba si eres member (user)
 * @memberof middlewares
 * @method member
 * @async
 * @param {Object} req peticion http
 * @param {Object} res respuesta http
 * @param {Object} next función de callback para que el middleware termine de manera exitosa
 */

function member(req,res,next){
    let value=req.headers.cookie
    let valor = value.split(';').map(c=>c.split('=')) 
    let rol = valor[1][1]
    console.log(rol,"este es el rol desde la vista de member")
    if(rol=="member"){
      next()
    } else {
      res.status(401).render('rolemember.pug')
    }
    console.log(rol)
    //
  }
  
  module.exports = member;