/* 3. Dado el arreglo [1,2,3,4,5,6]
● Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
● Calcular el promedio de todos los elementos del arreglo */

let arreglo=[1,2,3,4,5,6];

let i=1;
while (arreglo.length >= i) {
    console.log(i);
    i++;
}

console.log("----------------------------");

for (let index = 1; index <= arreglo.length; index++) {
    console.log(index);
}

console.log("---------------------");

let contador=1;

for (let index = 1; index <= arreglo.length; index++) {
    contador+=1
    console.log(contador);
}

console.log("---------------------");

let copiaArreglo = [];  

for (let index = 0; index < arreglo.length; index++) {
    copiaArreglo.push(arreglo[index] + 1);
}

console.log("Arreglo original:", arreglo);
console.log("Copia con elementos incrementados en 1:", copiaArreglo);

console.log("----------------");

let suma = 0;  

for (let index = 0; index < arreglo.length; index++) {
    suma += arreglo[index];
}
let promedio = suma / arreglo.length;
console.log("Promedio de los elementos del arreglo:", promedio);



