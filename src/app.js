/* Importo el módulo express */
const express = require ('express');

/* Importo el módulo nativo path en la variable path */
const path = require ('path');

//importndo archivos estaticos
const publicPath = path.resolve(__dirname, '../public');

/*traigo mis rutas para usarlas*/
const routes = require("./routes/index.routes");

/* Guardo en la variable app la ejecución de la función express */
const app = express();

//Para usar EJS 
app.set('views', path.join(__dirname,'./views'));
app.set('view engine','ejs');


/* A través de la propiedad static de express establezco los archivos estáticos */
app.use (express.static(publicPath));

//uso mi rutas
app.use("/", routes);

/* Levanto mi servidor  el process env port lo utilizamos para usar puertos disponibles en heroku*/
app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando en 3000'))

//Error 404
app.use((req,res,next)=>{
    res.status(404).render("error404");
  });
  