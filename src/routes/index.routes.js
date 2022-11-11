const express = require('express');
const controller = require("../controller/controller");
const routes = express.Router();
const path = require('path');
//Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/img/avatar');  //El segundo parametro es en donde voy a guardar mis archivos que subo, en este caso mi foto de perfil de registro
    },
    filename: (rq,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,fileName);
    }
});

const uploadfile = multer(storage);

/* Indico cuando me mostrará el home de mi página */
routes.get ('/',controller.index);

/* Indico cuando se mostrará el register de mi página */
routes.get ('/register',controller.registro);
routes.post('/register',uploadfile.single('avatar'),controller.crearUsuario);

/* Indico cuando se mostrará el login de mi página */
routes.get ('/login',controller.login);

/*Carrito*/
routes.get('/carrito',controller.carrito);

/*Detalle del producto*/
routes.get("/detalle",controller.detalle);


module.exports = routes;