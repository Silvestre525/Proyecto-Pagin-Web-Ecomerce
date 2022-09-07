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
    }
}


module.exports = controller;