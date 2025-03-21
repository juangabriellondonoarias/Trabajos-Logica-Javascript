// Una función que recibe una cadena y muestra si la cadena tiene la letra s o S

let cadena= prompt("Ingrese cadena")

function comprobarS(cadena) {
    for (let index = 0; index < cadena.length;
         index++) {
            if (cadena[index] == "s" && cadena[index] == "S") {
                return true;
            }
    }
    return false;
}

console.log(comprobarS(cadena));
