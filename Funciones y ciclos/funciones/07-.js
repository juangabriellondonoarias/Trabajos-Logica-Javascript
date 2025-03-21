/* 7. Escriba una función la cual reciba como parámetro una cadena y genere
como retorno la misma cadena pero con todos su contenido en mayúscula.*/

let cadena = "hola juan, como estas"

function cadenaMayuscula(cadena){
    let retorno= cadena.toUpperCase();
    return retorno;
}

let resultado= cadenaMayuscula(cadena);
console.log(resultado);
