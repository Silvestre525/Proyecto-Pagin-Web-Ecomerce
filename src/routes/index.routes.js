const express = require('express');
const controller = require("../controller/controller");
const routes = express.Router();
const path = require('path');

//Validaciones del Backend
const {body} = require('express-validator');

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

//Validaciones del Backend
const validations = [
    body('nombre').notEmpty().withMessage('No puedes dejar este campo vacio'),
    body('apellido').notEmpty().withMessage('No puedes dejar este campo vacio'),
    body('email')
    .notEmpty().withMessage('No puedes dejar este campo vacio').bail()
    .isEmail().withMessage('Debes poner un formato valido de correo'),  //bali sirve para hacer 2 validaciones en un mismo campo
    body('password').notEmpty().withMessage('No puedes dejar este campo vacio'),
    body('avatar').custom((value,{req})=>{
        let file = req.file;
        let accepted = ['.jpg','.JPG','.gif','.GIF','.png','.PNG'];
        
        if(!file){
            throw new Error ('debe insertar una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!accepted.includes(fileExtension)){
                throw new Error (`Las extenciones permitidas son ${accepted.join(',')}`);
            }  //Esto es una validacion custom la cual tenemos que inventar ya que no esta en express validator
        }
        return true;
    })
];

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