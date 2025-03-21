/*6. Cree un programa que lea un número y muestre si este
es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

let numero= parseInt(prompt("Ingrese el numero "));

if (numero % 5 == 0) {
    console.log("El numero es divisible entre 5");
    
}else{
    console.log("El numero no es divisible entre 5");
    
}

console.log("--------------------------------------");


switch (numero % 5 == 0) {
    case true:
        console.log("El nunmero es divisible entre  5");
        break;
case false:
    console.log("El numero no es divisible entre 5");
    
    default:
        break;
}