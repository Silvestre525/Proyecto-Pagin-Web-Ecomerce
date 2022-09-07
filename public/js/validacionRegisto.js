document.querySelector("#full-name").focus();
//Capturo todos mis input
let formulario = document.querySelector("form");
let nombre = document.querySelector("#full-name");
let user = document.querySelector("#username");
let email = document.querySelector("#user-email");
let fechaNacimiento = document.querySelector("#b-day");
let direccion = document.querySelector("#full-name");
let perfilUsuario = document.querySelector(".form-group__user-type");
let intereses = document.querySelector(".form-group__user-interest");
let fotoPerfil = document.querySelector("#profile-photo");
let password = document.querySelector("#password");
let repetirPassword = document.querySelector("#repeat-password");

let arrayInput = [nombre,user,email,fechaNacimiento,direccion,perfilUsuario,intereses,fotoPerfil,password,repetirPassword];

formulario.addEventListener("submit",(e)=>{
    entrar = false;
    arrayInput.forEach((input)=>{
        if(input.value == ""){
            input.nextElementSibling.innerHTML = `Este campo es obligatorio!!!`;
        }
        if(entrar = true){
            e.preventDefault();
        }
    });

});