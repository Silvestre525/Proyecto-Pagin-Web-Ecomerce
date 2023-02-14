//Este midlleware es para que cuando no hay nadie en session no permita entrar en la vista de perfil y que me mande al login si intentan hacerlo
function authMidlleware(req,res,next){
    if(!req.session.userLogged){
        return res.redirect('login');
    }
    next();
}


module.exports = authMidlleware;