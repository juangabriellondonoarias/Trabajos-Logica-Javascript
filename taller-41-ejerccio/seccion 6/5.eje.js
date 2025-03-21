/*5. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.*/

let usuario= prompt("Si deseas salir precione la letra, s de lo contrario no");

if (usuario === 's') {
    console.log("El programa se detuvo");
} else{
    console.log("El programa continua");
}

