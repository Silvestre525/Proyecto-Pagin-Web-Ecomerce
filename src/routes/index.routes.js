const express = require('express');
const controller = require("../controller/controller");
const routes = express.Router();

/* Indico cuando me mostrará el home de mi página */
routes.get ('/',controller.index);

/* Indico cuando se mostrará el register de mi página */
routes.get ('/register',controller.registro);
routes.post('/register',controller.crearUsuario);

/* Indico cuando se mostrará el login de mi página */
routes.get ('/login',controller.login);

/*Carrito*/
routes.get('/carrito',controller.carrito);

/*Detalle del producto*/
routes.get("/detalle",controller.detalle);

/* Redirecciono al home al completar el formulario del register y del login */
/*app.post ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})*/

module.exports = routes;