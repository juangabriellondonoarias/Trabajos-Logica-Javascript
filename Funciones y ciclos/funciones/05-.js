// 5. Escriba una función que reciba un número n como parámetro y genere su factorial.

function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i; 
    }
    return resultado;
}

console.log(calcularFactorial(3));
