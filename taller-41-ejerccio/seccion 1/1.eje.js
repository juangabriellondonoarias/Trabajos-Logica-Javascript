/* 1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro
de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber cuántos años tendrá
dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let edadUsuario= parseInt(prompt("Ingrese la edad que tienes actualmente"));

let edadFuturo= parseInt(prompt("Ingrese los años que deseas saber, cuantos años tendras"));

let suma= edadUsuario + edadFuturo;

console.log(`Actualmente tienes ${edadUsuario} años, en ${edadFuturo} años, tendras ${suma} años`);


