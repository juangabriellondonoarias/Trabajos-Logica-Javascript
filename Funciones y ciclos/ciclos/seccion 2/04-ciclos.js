// 4.Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.

function obtenerNotas() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    return [nota1, nota2, nota3];
}

function calcularPromedio(notas) {
    let suma = notas[0] + notas[1] + notas[2];
    let promedio = suma / 3;
    return promedio;
}

function calcularPromedios() {
    let n = parseInt(prompt("Ingrese el número de estudiantes:")); 

    for (let i = 1; i <= n; i++) {
        console.log(`Estudiante ${i}:`);
        let notas = obtenerNotas();
        let promedio = calcularPromedio(notas);
        console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`);
    }
}
calcularPromedios();
