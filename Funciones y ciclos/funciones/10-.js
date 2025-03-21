// 10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.

function eliminarVocales(cadena) {
    let resultado = ""; 
    for (let i = 0; i < cadena.length; i++) {  
        let letra = cadena[i];  
        if (letra !== 'a' && letra !== 'e' && letra !== 'i' && letra !== 'o' && letra !== 'u' &&
            letra !== 'A' && letra !== 'E' && letra !== 'I' && letra !== 'O' && letra !== 'U') {
            resultado += letra;  
        }
    }
    return resultado; 
}


let cadena = "hola juan como estas, espero que bien ";
let cadenaSinVocales = eliminarVocales(cadena);
console.log(cadenaSinVocales);  


















// function contarSinVocales(cadena) {
//     const novocales= !'bcdfghjklmñnpqrstwvxyz';
//     let contador= 0;
//     for (let index = 1; index < cadena.length; index++) {
//         if (novocales.includes(cadena[index])){
//             contador++;
            
//         }
//     }
//     return `La cadena tiene ${contador} letras sin vocales `
    
// }

// let resultado= contarSinVocales(' hola, como ta a ido en tu dia');
// console.log(resultado);

