/* 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/


let numero = parseInt(prompt("Introduce un número entre 1 y 15:"));

if (numero < 2 || numero > 15) {
    console.log("El número debe estar entre 1 y 15.");
} else {
    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log("El número es primo.");
    } else {
        console.log("El número NO es primo.");
    }
}

console.log("------------------------");


if (numero < 1 || numero > 15) {
    console.log("El número debe estar entre 1 y 15.");
    } else {
    switch (numero) {
        case 2:
        case 3:
        case 5:
        case 7:
        case 11:
        case 13:
            console.log("El número es primo.");
            break;
        default:
            console.log("El número NO es primo.");
            break;
    }
}
