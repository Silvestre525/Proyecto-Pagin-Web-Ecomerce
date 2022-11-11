const path = require('path');

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
        return res.send({
            body: req.body,
            file: req.file
        });
    }
}


module.exports = controller;