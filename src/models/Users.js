
const fs = require('fs');


const User = {
    fileName: './src/database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    //Metodo para generar un ID
    generateId: function () {
        let allUser = this.findAll();
        let lastUser = allUser.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    //Buscar a todos los usuarios
    findAll: function () {
        return this.getData();
    },

    //Buscar a los usuarios por id 
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    //Buscar al usuario que se quiere loguear por su email o cualquier campo
    findByField: function (field, text) {
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    //Guardar al usuario en la DB
    create: function (userData) {
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUser = this.findAll();
        allUser.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, ' '));
        return newUser;
    },
    //Eliminar a un usuario de la DB

    delete: function(id){
        let allUser = this.findAll();
        let finalUser = allUser.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;
    }
}


module.exports = User;