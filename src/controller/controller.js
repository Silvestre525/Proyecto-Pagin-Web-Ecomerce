const path = require('path');
const {validationResult} = require('express-validator')

const controller = {
    index:(req,res) =>{
        return res.render('home');
    },
    registro:(req,res) =>{
        return res.render('register');
    },
    login:(req,res) =>{
        return res.render('login');
    },
    carrito:(req,res)=>{
        return res.render('carrito');
    },
    detalle:(req,res) =>{
        return res.render('detalle');
    },
    crearUsuario:(req,res) =>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){   //si mi array es mayor a 0, osea si tiene mas de 1 error se activa el if
            return res.render('register',{  //Voy a devolver mi vista de regitro y ahi con el mapped lo tranformo en un objeto literarl
                errors:resultValidation.mapped(),
                oldData:req.body  //Lo que quedo en el req.body ates de darle registrar
            });
        }

        return res.send('Ok sin errores, aca podrias añadir una vista');
    }
}


module.exports = controller;