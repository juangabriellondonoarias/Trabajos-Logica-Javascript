// 4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.

let precio= 1000;
const iva= 0.19;

let precioIVA= precio + (precio * iva);
console.log(`El precio del producto con un IVA del 19% es de ${precioIVA}`);
