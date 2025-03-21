/* 8. Cree un programa que tome el valor de un producto e imprima su precio
final si éste tiene siempre un descuento del 10%.*/

const descuento=0.1;

let precioProducto=2000;

let precioFinal= precioProducto - (precioProducto * descuento);
console.log(`El producto tiene un precio de ${precioFinal} si este tiene un descuento de 10%`);

