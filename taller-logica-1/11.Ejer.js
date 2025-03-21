// 11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados.


let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

let suma = dado1 + dado2;

console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`La suma de los resultados es: ${suma}`);
