// 1. Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área.

/*function calcularArea(altura,base) {
    let area= altura * base
    return area
}

let resultado= calcularArea(3,6)
console.log(resultado);*/

let base=parseInt(prompt("ingrese el numero de la base"));
let altura=parseInt(prompt("ingrese el numero de la altura"));

function calcularArea(){
let area= base * altura
return area;
}

let resultado=calcularArea(base,altura);
alert(`El area es de ${resultado}`);
