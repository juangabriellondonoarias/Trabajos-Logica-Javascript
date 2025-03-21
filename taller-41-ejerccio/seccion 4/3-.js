/*3. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

let numeroDivisible= 13;

if (numeroDivisible % 5 === 0) {
    console.log(`El numero es divisible`);
}else{
    console.log("El numero no es divisible");
}

console.log("------------------");


switch (numeroDivisible % 5) {
    case 0:
        console.log("El número es divisible.");
        break;
    default:
        console.log("El número NO es divisible.");
        break;
}

