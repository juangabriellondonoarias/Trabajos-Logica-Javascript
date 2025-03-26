/* 2. Programe una función que permita encontrar el número menor contenido en una matriz recibida como
parámetro.*/

function encontrarNumeroMenor(matriz) {
    let menor = Infinity;

    for (let i = 0; i < matriz.length; i++) {
        let subArreglo = matriz[i];

        for (let j = 0; j < subArreglo.length; j++) {
            if (subArreglo[j] < menor) {
                menor = subArreglo[j];
            }
        }
    }
    return menor;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let menorNumero = encontrarNumeroMenor(matriz);
console.log("El número menor de la matriz es:", menorNumero);
