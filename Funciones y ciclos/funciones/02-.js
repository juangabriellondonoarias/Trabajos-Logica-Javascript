// 2. Escriba una función que reciba el lado de un cubo y retorne su volumen.

let ladoCubo=parseInt(prompt("Ingrese el numero de del lado del cubo"));

function calcularVolumen(){
let volumen= ladoCubo ** 3
return volumen   
}

let resultado= calcularVolumen();
alert(`Su volumen es de ${resultado}`);
