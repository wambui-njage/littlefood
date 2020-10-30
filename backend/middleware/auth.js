const token = async function(req, res,next) {

  console.log( req.session.id);

    if (req.url === '/login') {
        return next();
    }

    if ( req.session.user && req.session.corporate ) {
        // TODO: find a better way of this
       // res.locals.user = req.session.user;

        return next();
      } else {
  
        return res.status(401).redirect("/login");
      }
    


   
}


module.exports = token;