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