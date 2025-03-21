// Una función que reciba un arreglo de números y retorne otro arreglo solo con los números pares

function obtenerNumeroPares(arreglo) {
    let numeroPares= [];

    for (let index = 0; index < arreglo.length; index++) {

        if (arreglo[index] % 2 === 0) {
            numeroPares.push(arreglo[index])
        }
        
    }

    return numeroPares;
}


const arreglo=[1,2,3,4,5,6,7,8,9,10];
console.log(obtenerNumeroPares(arreglo));
