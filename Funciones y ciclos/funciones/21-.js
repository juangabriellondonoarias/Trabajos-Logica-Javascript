/* 21. Escriba un programa que verifique si un número es primo utilizando dos funciones: 
● esPrimo(numero): determina si un número es primo. 
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la función esPrimo.*/

function esPrimo(numero){
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function imprimirResultado(numero){
    if (esPrimo(numero)) {
        console.log(`El numero ${numero} es primo.`);
    } else{
        console.log(`El numero ${numero} no es primo.`);
    }
}

imprimirResultado(7);
imprimirResultado(10);