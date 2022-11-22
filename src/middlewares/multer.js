//Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/img/avatar');  //El segundo parametro es en donde voy a guardar mis archivos que subo, en este caso mi foto de perfil de registro
    },
    filename: (rq,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,fileName);
    }
});

const uploadfile = multer(storage);

module.exports = uploadfile;