// 6. Cree un programa que calcula la suma de los primeros n números naturales.

let contador = 1
let acumuladora = 0
let n = parseInt(prompt("Ingresa n para calcular los numeros naturales hasta n"))
if (n <=0) {
    alert("Los numeros naturales no pueden ser negativos o cero")
} else {
    alert (`los numeros naturales hasta ${n} son:`)
while (contador <= n) {
    console.log(contador);
    acumuladora = acumuladora + contador
    contador++
    }
}
console.log(`La suma de los numeros naturales hasta ${n} es: ${acumuladora}`);