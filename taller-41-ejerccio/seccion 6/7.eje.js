/* 7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero.*/

let suma=0;
let cantidad= 0;
let numero;

while (true) {

    numero = parseFloat(prompt("ingrese un numero (y 0 para terminar)"));

    if (numero == 0) {
        break;
    }
    
    suma += numero;
    cantidad += 1;
}

if (cantidad > 0) {
    let promedio= suma / cantidad;
    console.log(`el promedio de los numeros es de ${promedio}`);
}else{
    console.log(`no se ingrsaron numeros para calcular el promedio`);
}



