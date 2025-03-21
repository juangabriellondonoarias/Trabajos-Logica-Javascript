/* 5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un
descuento del 10%.*/

let valorProducto= 100;
const descuento= 0.1;

let precioFinal= valorProducto - (valorProducto * descuento);
console.log(`El producto le cuesta ${precioFinal} teniendo un descuento de el 10%.`);
