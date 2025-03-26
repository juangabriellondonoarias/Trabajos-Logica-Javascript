/* 1. Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de
tal manera que la función retorne la longitud(número de elementos) del arreglo.*/


function obtenerLongitudArreglo(arreglo) {
    return arreglo.length; 
}

let arreglo = [13, 12, 34, 65, 34, 43];

let longitud = obtenerLongitudArreglo(arreglo);
console.log("La longitud del arreglo es:", longitud);
