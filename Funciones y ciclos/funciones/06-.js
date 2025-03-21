/* 6. Escriba una función con el nombre de esVocal() que tome un carácter ,
devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.*/

function esVocal(caracter) {
caracter = caracter.toLowerCase();


if ('aeiou'.includes(caracter)) {
    return true;
} else {
    return false;
}
}

console.log(esVocal('p'));  
console.log(esVocal('i')); 
console.log(esVocal('o'));  
console.log(esVocal('j'));  
