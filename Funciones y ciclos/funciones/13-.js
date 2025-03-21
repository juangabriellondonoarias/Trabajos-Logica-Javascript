/* 13. Escriba una función que reciba un número entero y dicha función
pueda determinar si el número enviado es positivo o negativo. */

let numero= -32; 

function determinarNumero(numero) {
    if (numero >= 1) {
        console.log("El numero es positivo");
    }else if (numero < 0) {
        console.log("El numero es negativo");
    }else{
        console.log("el numero 0 es nuetro");
        
    }
}

determinarNumero(numero);

