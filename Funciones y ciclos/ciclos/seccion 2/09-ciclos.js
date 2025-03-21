// 9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”,
//  si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.

let deseaSalir= prompt("Deseas salir, escribe s o S para si,  o no.");

if (deseaSalir != 's' && deseaSalir != 'S') {
    console.log("El programa  continua");
}else{
    console.log("El programa se detuvo");
}

console.log("Gracias por usar el servcio");
