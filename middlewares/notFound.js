function notFound(req,res,next){
    res.status(404).render('error');
}

module.exports = notFound;