function member(req,res,next){
    let value=req.headers.cookie
    let valor = value.split(';').map(c=>c.split('=')) 
    let rol = valor[1][1]
    if(rol=="member"){
      next()
    } else {
      res.status(401).json({mensaje:'you need role member'});
    }
    console.log(rol)
    //
  }
  
  module.exports = member;