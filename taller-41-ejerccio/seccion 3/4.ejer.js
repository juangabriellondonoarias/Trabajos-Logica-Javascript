/* 4. Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/

let numero1= parseInt(prompt("Ingrese el primer numero"));
let numero2= parseInt(prompt("Ingrese el segundo numero"));
let numero3= parseInt(prompt("Ingrese el tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El numero mayor es ${numero1}, y los menores son ${numero2} y ${numero3}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El numero mayor es ${numero2}, y los menores son ${numero1} y ${numero3}`);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El numero mayor es ${numero3}, y los menores son ${numero1} y ${numero2}`);   
} else {
    console.log(`Los numeros son iguales ${numero1}, ${numero2}, ${numero3}`);
}