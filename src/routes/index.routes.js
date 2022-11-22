const express = require('express');
const controller = require("../controller/controller");
const routes = express.Router();
const path = require('path');

//Importando multer
const uploadfile = require("../middlewares/multer");
//Importando validaciones backend
const validations = require("../middlewares/validacionesBackend");

/* Indico cuando me mostrará el home de mi página */
routes.get ('/',controller.index);

/* Indico cuando se mostrará el register de mi página */
routes.get ('/register',controller.registro);
//Procesar registro
routes.post('/register',uploadfile.single('avatar'),validations,controller.crearUsuario);

/* Indico cuando se mostrará el login de mi página */
routes.get ('/login',controller.login);

/*Carrito*/
routes.get('/carrito',controller.carrito);

/*Detalle del producto*/
routes.get("/detalle",controller.detalle);


module.exports = routes;