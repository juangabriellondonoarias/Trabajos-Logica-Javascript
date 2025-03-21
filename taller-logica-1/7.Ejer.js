// 7. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.

const IVA= 0.19;

let precioProducto= 1000;
let precioFinal= (precioProducto * IVA) + precioProducto;
console.log(`El producto tiene un precio de ${precioFinal} teniendo un IVA de 19%`);
