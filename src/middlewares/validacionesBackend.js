//Validaciones del Backend
const {body} = require('express-validator');


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

module.exports = validations;