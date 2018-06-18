var menuNavegacion = document.querySelector ("#menu-navegacion");

// var navPurobrut = document.querySelector ("#nav-purobrut");
var navHamb = document.querySelector ("#nav-hamb");

// var navIcon = document.querySelector ("#nav-icon");
var navIcon = document.querySelector ("#menu_hamb");

var isMenuOpen = false; 

navHamb.onclick = function (){
    if (isMenuOpen ==false){
        menuNavegacion.classList.remove("oculto");
        navIcon.classList.add("is-open");
        isMenuOpen=true;
    }
    else {
        menuNavegacion.classList.add("oculto");
        navIcon.classList.remove("is-open");
        isMenuOpen=false;
    }
};