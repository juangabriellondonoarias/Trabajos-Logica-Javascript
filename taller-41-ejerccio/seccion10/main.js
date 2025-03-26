/* 1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.*/

const productos = {
    "manzana": 1.5, 
    "banana": 2.0,  
    "naranja": 1.8,  
    "pera": 2.2,    
    "uva": 3.0,
    "mandarina" : 2.4
}

while (true) {
    const productoIngresado = prompt("Ingrese el nombre de un producto (manzana, banana, naranja, pera, uva, mandarina):");

if (productos[productoIngresado] !== undefined) {
    alert(`El precio de ${productoIngresado} es $${productos[productoIngresado]}`);
    } else {
    alert("El producto ingresado no está disponible en la tienda.");
    }
}

