/* 16. Escriba una función que se llame facturacion() La función tiene que recibir
como parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se aplicará 
ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un descuento del 30%
si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito.
Para montos mayores a $400, el descuento es del 40% sin importar el medio de pago La función 
deberá retornar el monto final a pagar. */

let montoDelProducto= parseInt(prompt("Ingrese el precio del producto"));
let c = 0.1;
let e = 0.3;
let d= 0.2;
let montoMayores= 0.4;


function facturacion(){
    if (montoDelProducto < 200) {
        console.log(`No se hace ningun descuento, tienes que pagar ${montoDelProducto} pesos.`);        
    }else if (montoDelProducto >= 200 && montoDelProducto <= 400) {
        let mul= montoDelProducto * e ;
        let resta= montoDelProducto - mul;
        console.log(`El producto tiene 30% de descuento, tienes que pagar ${resta} pesos, si es en efectivo. `);
        console.log("----------------------");

        let mul1= montoDelProducto * d;
        let resta2= montoDelProducto - mul1;
        console.log(`El producto tiene 20% de descuento, tienes que pagar ${resta2} pesos , si se realiza con debito`);
        console.log("----------------------");

        let mul3= montoDelProducto * c;
        let resta3= montoDelProducto - mul3;
        console.log(`El producto tiene 10% de descuento, tienes que pagar ${resta3} pesos, si se realiza con credito`);
    } else{
        let mul4= montoDelProducto * montoMayores;
        let  resta4= montoDelProducto - mul4;
        console.log(`El producto tiene 40% de descuento, tienes que pagar ${resta4} pesos, de cualquier modo de pago`);
    }
    return montoDelProducto;
}

let resultado= facturacion();
console.log(`El producto vale ${resultado} pesos en general.`);
