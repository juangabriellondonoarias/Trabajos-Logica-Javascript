// 9. Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.

function contarVocales(cadena) {
    const vocales= 'aeiouAEIOU';
    let contador= 0;
    for (let index = 1; index < cadena.length; index++) {
        if (vocales.includes(cadena[index])){
            contador++;
            
        }
    }
    return `La cadena tiene ${contador} vocales `
    
}

let resultado= contarVocales('Hola mundo, hoy vamos a programar');
console.log(resultado);
