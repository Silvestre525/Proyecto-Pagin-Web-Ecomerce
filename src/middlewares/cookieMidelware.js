const User = require('../models/Users');
//Anda al controlador Proceso de Logien para saber que hicimos antes
function cookieMidlleware(req,res,next){
    //Guardamos lo que tenemos en mi recordame enuna varaible
    let emailInCookie = req.cookies.userEmail;

    //Despues buscamos al usuario por email con el email que tenemos en la cookie

    //Para usar la funcion findByField importmammos el modelo   
    let userFromCookie = User.findByField('email',emailInCookie);

    //Si tengo al usuario que coincide con el que esta en mi cookie
    if(userFromCookie){
        //que le pase toda esa informacon a session
        req.session.userLogged = userFromCookie;
    }
    
    next();
}

module.exports = cookieMidlleware;
