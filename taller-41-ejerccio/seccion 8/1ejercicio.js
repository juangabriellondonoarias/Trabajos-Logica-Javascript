/* 1. Dado el siguiente arreglo [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]:
● Iterar por todos los elementos del arreglo utilizando while y mostrarlos en pantalla.
● Iterar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
● Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1.
Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal
cual se piden.
● Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo*/

let arreglo=[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let index = 0;  


while (index < arreglo.length) {
    let subArreglo = arreglo[index];  
    let subIndex = 0;  

    while (subIndex < subArreglo.length) {
        console.log(subArreglo[subIndex]);
        subIndex++;
    }

    index++;
}

console.log("------------------------------");


for (let index = 0; index < arreglo.length; index++) {
    let subArreglo = arreglo[index];  

    for (let subIndex = 0; subIndex < subArreglo.length; subIndex++) {
        console.log(subArreglo[subIndex]);
    }
}

console.log("-----------------------");

let copiaArreglo = [];  

for (let index = 0; index < arreglo.length; index++) {
    let subArreglo1= arreglo[index];

    for (let subIndex1= 0; subIndex1 < subArreglo1.length; subIndex1++) {
        copiaArreglo.push(subArreglo1[subIndex1] + 1);
    }

}

console.log("Arreglo original:", arreglo);
console.log("Copia con elementos incrementados en 1:", copiaArreglo);

console.log("-------------------------");

let suma = 0;  
let totalElementos = 0;  


for (let index = 0; index < arreglo.length; index++) {
    let subArreglo1 = arreglo[index];


    for (let subIndex1 = 0; subIndex1 < subArreglo1.length; subIndex1++) {
        suma += (subArreglo1[subIndex1] + 1); 
        totalElementos++; 
    }
}

let promedio = suma / totalElementos;
console.log("Promedio de los elementos del arreglo:", promedio);
