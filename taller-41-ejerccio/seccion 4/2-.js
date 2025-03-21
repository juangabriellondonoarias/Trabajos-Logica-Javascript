/*2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

let numero= 87;

if (numero % 2==0) {
    console.log("El numero es Par");
} else{
    console.log("El numero es Impar");
}

console.log("-----------------------");


switch (numero % 2) {
    case 0:
        console.log("El número es par.");
        break;
    case 1:
        console.log("El número es impar.");
        break;
    default:
        console.log("Hubo un error.");
        break;
}

