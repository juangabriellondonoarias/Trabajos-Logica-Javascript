// 11. Cree un programa que muestre el promedio de n números,
//  dejándose de solicitar números cuando se introduzca el cero.


let suma= 0;
let cantidad= 0;
let numero;

while (true) {
    
    numero= parseFloat(prompt("Ingrese un numero (y 0 para finalizar)"));

    if (numero === 0) {
        break;
    }

    suma += numero;
    cantidad += 1;
}

if (cantidad > 0) {
    let promedio= suma / cantidad;
    console.log(`El promedio de los numeros es de ${promedio}`);
} else{
    console.log(`No se ingresaron numeros para calcular el promedio`);
}