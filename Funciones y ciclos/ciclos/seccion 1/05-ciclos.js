/*5. Cree un programa que lea un número y muestre
si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

let selecionNumero=parseInt(prompt("Ingrese el numero"));

if (selecionNumero % 2 == 0) {
    console.log("El numero es par");
    
}else{
    console.log("el numero es impar");
    
}

console.log("---------------------------------");

switch (selecionNumero % 2 == 0) {
    case true:
        console.log("El numero es par");
        break;
    case false:
        console.log("El numero es impar");
    default:
        break;
}
