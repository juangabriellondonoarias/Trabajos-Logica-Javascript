// 4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.

let n= 4;

function factorial() {
    let resultado= 1;
    for (let i = 1; i <=n; i++) {
        resultado*=i;
    }
    return resultado;
}

console.log(factorial());
