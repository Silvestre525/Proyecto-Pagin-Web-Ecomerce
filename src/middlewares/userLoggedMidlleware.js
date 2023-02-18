//Midlleware de aplicacion que sirve para mostrar parte de la nav bar dependiendo de si hay alguien en session o no
function userLogged(req,res,next){
    //Asi se crea una variable que se pueda consumir en cualquier vista
     res.locals.isLogged = false;
     //Este paso es importante y esta relacionado con la vista de header y las variable locals
     //si tengo a alguien en session la variable quedara en true entonces en la vista, no entrara en el else si no en el if ya que es true
     if(req.session.userLogged){
        res.locals.isLogged = true;
     }
    next();
}
module.exports = userLogged;