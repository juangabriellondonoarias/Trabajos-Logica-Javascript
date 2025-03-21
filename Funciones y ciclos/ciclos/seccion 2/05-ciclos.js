// 5. Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.

let contador = 1
let n = parseInt(prompt("Ingresa un numero  para calcular los numeros naturales hasta n"))
if (n <=0) {
    alert("Los numeros naturales no pueden ser negativos o cero, solo numeros enteros")
} else {
    alert (`los numeros naturales hasta ${n} son:`)
while (contador <= n) {
    console.log(contador);
    contador++
    }
};
