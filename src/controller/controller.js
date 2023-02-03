const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')

//Requiero mi modelo
const User = require('../models/Users'); 

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
    ProcesoDeRegistro:(req,res) =>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){   //si mi array es mayor a 0, osea si tiene mas de 1 error se activa el if
            return res.render('register',{  //Voy a devolver mi vista de regitro y ahi con el mapped lo tranformo en un objeto literarl
                errors:resultValidation.mapped(),
                oldData:req.body  //Lo que quedo en el req.body ates de darle registrar
            });
        }        


        //Validar que no existan emails repetidos para registrarlo en mi BD
        let UserInBD = User.findByField('email',req.body.email);

        if(UserInBD){
            res.render('register',{  
                errors:{
                    email:{
                        msg: "Este email ya esta registrado"
                    }
                },
                oldData:req.body
        })
        }



        //Comenzamos la creacion del usuario
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            avatar: req.file.filename
        }

        User.create(userToCreate);
        return res.redirect('/login');
    },
    ProcesoDeLogin:(req,res) => {
        //Busco al usuario en mi BD
        let UserToLogin = User.findByField('email',req.body.email);

        //Si el usuario existe
        if(UserToLogin){
            //comparamos nustro passwor encriptado con el que esta en el body
            let passwordOk = bcryptjs.compareSync(req.body.password,UserToLogin.password);

            //Si los password son iguales
            if(passwordOk){
                return res.send('ingresaste');
            }
            return res.render('login', {
				errors: {
					password: {
						msg: 'Contraseña incorrecta'
					},
                    oldData:req.body
				}
			});
        }
        //Si no encuentra el email o usuario en la BD
        return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				},
                oldData:req.body
			}
		});
    }
}


module.exports = controller;