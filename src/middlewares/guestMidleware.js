/*Nos nos dejara acceder a la ruta get registro ni a login mientas estemos logeado es decir en session */

function guestMiddleware (req,res,next){
//Preguntamos si tenemos a alguien en session es decir logueado en el momento.
//Seguimos en la ruta get.register
if(req.session.userLogged){
    return res.redirect('perfil');
}
next();
}

module.exports = guestMiddleware;