const path = require('path');

const controller = {
    index:(req,res) =>{
        return res.render('home.ejs');
    },
    registro:(req,res) =>{
        return res.render('register.ejs');
    },
    login:(req,res) =>{
        return res.render('login.ejs');
    }
}


module.exports = controller;