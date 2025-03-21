/* 9. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.*/

let cantidad = parseFloat(prompt("Ingresa la cantidad: "));

let porcentaje = parseFloat(prompt("Ingresa el porcentaje a calcular: "));

let resultado = (cantidad * porcentaje) / 100;
alert(`El ${porcentaje}% de ${cantidad} es: ${resultado}`);

