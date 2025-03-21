/* 1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let edadUsuario= parseInt(prompt("Ingrese la edad que tengas actualmente"));

let futuro= parseInt(prompt("Ingrese los años a futuro"));

let resultado= edadUsuario + futuro;
alert(`Actualmente tienes ${edadUsuario} años, en ${futuro} años tendras  ${resultado}`);



