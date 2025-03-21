/* 3. Cree un programa que reciba dos números y muestre el mayor.
En caso de que los números sean iguales
también se debe mostrar al usuario.*/

let numero1=parseInt(prompt("Ingrese el primer numero"));
let numero2=parseInt(prompt("Ingrese el segundo numero"));

if (numero1 > numero2) {
    console.log(`El numero mayor es ${numero1}`);   
}else if( numero1 === numero2){
    console.log(`Los numeros son iguales ${numero1} = ${numero2}`);
} else {
    console.log(`El numero mayor es ${numero2}`);
}

