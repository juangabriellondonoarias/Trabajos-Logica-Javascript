/* 1. Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use
ciclo for. Use funciones.*/

let numero= 100;

function programa(){
    for (let index = 1; index <= numero; index++) {
        console.log(index);
    }
}
programa();

console.log("---------------------");


let numero1=1

function programa1(){
    for (let index = 100; index >= numero1; index--) {
        console.log(index);
    }
}
programa1();