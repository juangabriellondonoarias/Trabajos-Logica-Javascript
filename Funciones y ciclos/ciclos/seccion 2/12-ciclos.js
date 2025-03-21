// 12. Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.

let n = parseInt(prompt("Introduce el valor de n:"));

if (n > 0) {
    let suma = 0;


    for (let i = 1; i <= n; i++) {
        suma += i * i;  
    }


    console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${suma}`);
} else {
    console.log("Por favor, ingresa un número mayor que 0.");
}
