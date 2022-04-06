function admin(req,res,next){
  let value=req.headers.cookie
  let valor = value.split(';').map(c=>c.split('=')) 
  let rol = valor[1][1]
  if(rol=="admin"){
    next()
  } else {
    res.status(401).json({mensaje:'you need role admin'});
  }
  console.log(rol)
  //
}

module.exports = admin;