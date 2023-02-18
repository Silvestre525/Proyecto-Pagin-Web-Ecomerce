/* Importo el módulo express */
const express = require ('express');
/*Requerimos session */
const session = require('express-session');
/* Importo el módulo nativo path en la variable path */
const path = require ('path');
//Importo Midlleware de aplicacion para mostrar o no botones en el navbar
const userLogged = require('./middlewares/userLoggedMidlleware');

/* Guardo en la variable app la ejecución de la función express */
const app = express();


//Usamos session y la configuramos
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(userLogged);

//importndo archivos estaticos
const publicPath = path.resolve(__dirname, '../public');

/*traigo mis rutas para usarlas*/
const routes = require("./routes/index.routes");


app.use(express.urlencoded({extend: false}));

/* A través de la propiedad static de express establezco los archivos estáticos */
app.use (express.static(publicPath));
app.use(express.json()); 


//Para usar EJS 
app.set('views', path.join(__dirname,'./views'));
app.set('view engine','ejs');

//uso mi rutas
app.use("/", routes);

/* Levanto mi servidor  el process env port lo utilizamos para usar puertos disponibles en heroku*/
app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando en 3000'))

//Error 404 //Esto se ejecuta por ultimo por eso tira el error,busca todas las rutas y si no la encuntra se ejecuta esta
app.use((req,res,next)=>{
    res.status(404).render("error404");
  });
  