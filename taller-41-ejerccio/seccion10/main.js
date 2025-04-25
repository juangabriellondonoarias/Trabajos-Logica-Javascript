/* 1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.*/

const productos = {
    "manzana": 1500, 
    "banana": 500,  
    "naranja": 500,  
    "pera": 1200,    
    "uva": 2000,
    "mandarina" :600
}

while (true) {
    const productoIngresado = prompt("Ingrese el nombre de un producto (manzana, banana, naranja, pera, uva, mandarina):");

if (productos[productoIngresado] !== undefined) {
    alert(`El precio de ${productoIngresado} es $${productos[productoIngresado]}`);
    } else {
    alert("El producto ingresado no está disponible en la tienda.");
    }
}

