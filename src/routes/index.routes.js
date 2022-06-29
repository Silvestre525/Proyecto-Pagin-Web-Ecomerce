const express = require('express');
const path = require('path');
const controller = ('../controllers/controller');
const routes = express.Router();

/* Indico cuando me mostrará el home de mi página */
app.get ('/',controller.index);

/* Indico cuando se mostrará el register de mi página */
app.get ('/register',controller.register);

/* Indico cuando se mostrará el login de mi página */
app.get ('/login', controller.login);























module.exports = routes;