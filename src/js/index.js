require ('../styles/main.scss');
import * as functions from './functions';

window.foo = functions.foo;
// window.foo2 = functions.foo2;

window.addEventListener("DOMContentLoaded",(e)=>{
    console.log("Web cargada!");
    console.log(foo());
    console.log(functions.foo2());
})