function member(req,res,next){
    let value=req.headers.cookie
    let valor = value.split(';').map(c=>c.split('=')) 
    let rol = valor[1][1]
    console.log(rol,"este es el rol desde la vista de member")
    if(rol=="member"){
      next()
    } else {
      // res.status(401).json({mensaje:'you need role member'});
      res.status(401).render('roleadmin.pug')
    }
    console.log(rol)
    //
  }
  
  module.exports = member;