const iconoMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav_menu");

iconoMenu.addEventListener("click",(e)=>{
    //Alternamos estilos para el menu y el body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
});