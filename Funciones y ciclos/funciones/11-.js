// 11. Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.


function numeroAletorio(numero) {
    if (numero >=1 && numero <= 20) {
        numero= Math.floor(Math.random() * 20) + 1;
    }else{
        console.log("este numero no esta en el rango de 1 al 20");
    }
    return numero;
}

let resultado= numeroAletorio(1);
console.log(resultado);

