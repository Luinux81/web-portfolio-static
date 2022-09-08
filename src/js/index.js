require ('../styles/main.scss');
import * as functions from './functions';

window.foo = functions.foo;
// window.foo2 = functions.foo2;

window.addEventListener("DOMContentLoaded",(e)=>{
    // console.log("Web cargada!");
    // console.log(foo());
    // console.log(functions.foo2());

    const iconoMenu = document.querySelector("[data-id='icono_menu']");
    const iconoCerrar = document.querySelector("[data-id='icono_cerrar']");
    const menu = document.querySelector("[data-id='menu_movil']");

    iconoMenu.addEventListener("click",(e)=>{
        menu.classList.add('open');
        document.body.classList.add("block-height");
    });

    iconoCerrar.addEventListener("click",(e)=>{
        menu.classList.remove("open");
        document.body.classList.remove("block-height");
    });

    const links = document.querySelectorAll("[data-id='menu_movil'] .menu_layout__nav a");

    links.forEach((link)=>{
        link.addEventListener("click", (e)=>{
            menu.classList.remove('open');
            document.body.classList.remove("block-height");
        })
    })


})