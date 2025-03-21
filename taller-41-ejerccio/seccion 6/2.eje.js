// 2. Cree un programa que calcula la suma de los primeros n números naturales.

let contador = 1;
let acumulador= 0;

let n= 5;
if (n <= 0) {
    console.log("el numero es negativo o cero, ingrese un numero positivo");

} else{
    console.log(`Los numeros naturales hasta ${n} son: `);
while(contador <=n){
    console.log(contador);
    acumulador= acumulador + contador;
    contador++;
    }    
}

console.log(`la suma de los numeros naturales hasta ${n} es : ${acumulador}`);
