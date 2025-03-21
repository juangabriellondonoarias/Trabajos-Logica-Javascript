/*7. Cree un programa que lea un número entre 1 y 15 y muestre
si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/


let numero = parseInt(prompt("Ingrese un número entre 1 y 15:"));

let esPrimo = true;

if (numero < 1 || numero > 15) {
    console.log("Por favor ingrese un número entre 1 y 15.");
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false; 
            break; 
        }
    }
    
    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

console.log("---------------------------");
