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
let parrafo = document.querySelector("#warnings");

let arrayInput = [nombre,user,email,fechaNacimiento,direccion,fotoPerfil,password,repetirPassword];

//Agrego el elemento submit a todo el formulario
formulario.addEventListener("submit",(e)=>{
    entrar = false;
    let mensaje = "";

    if(nombre.value.length == ""){
        inputNombre.classList.add("is-invalid");
        warnings += `<li>Campo nombre obligatorio.</li>`
        entrar = true;
    }
        if(entrar = true){
            e.preventDefault();
            parrafo.innerHTML = warnings;
        }
    });



//Recorro mi array de inputs para agregar el evento blur a cada input 
arrayInput.forEach((input)=>{
    input.addEventListener("blur",(e)=>{
        if(input.value == ""){
            input.nextElementSibling.innerHTML = "No te olvides de completar este campo!!!";
        }else if(input.value != ""){
            input.nextElementSibling.innerHTML = "";
        }
    });
});