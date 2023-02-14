const express = require('express');
const controller = require("../controller/controller");
const routes = express.Router();
const path = require('path');

//importanto guestMiddleware
const guest = require('../middlewares/guestMidleware');
//Importando multer
const uploadfile = require("../middlewares/multer");
//Importando validaciones backend
const validations = require("../middlewares/validacionesBackend");
const { ProcesoDeLogin } = require('../controller/controller');

/* Indico cuando me mostrará el home de mi página */
routes.get ('/',controller.index);

/* Indico cuando se mostrará el register de mi página */
//El midleware guest permite que al esat logeado cuando intentemos ir a registrar me redirija al perfil del usuario logeado.
routes.get ('/register',guest,controller.registro);
//Procesar registro
routes.post('/register',uploadfile.single('avatar'),validations,controller.ProcesoDeRegistro);

/* Indico cuando se mostrará el login de mi página */
routes.get ('/login',guest,controller.login);

/*Procesar login*/
routes.post('/login',controller.ProcesoDeLogin);

/*Carrito*/
routes.get('/carrito',controller.carrito);

/*Detalle del producto*/
routes.get("/detalle",controller.detalle);

/*Perfil*/
routes.get('/perfil/',controller.perfil);



module.exports = routes;