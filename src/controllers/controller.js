const controller = {
    index:(req, res) => {
       return res.render('home.html');
    },

    register:(req,res) => {
        return res.render('register.html');
    },
    login:(req,res) => {
        return res.render('login.html');
    }
};
module.exports = controller;