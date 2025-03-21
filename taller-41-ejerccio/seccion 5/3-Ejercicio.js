// 3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.

function calcularPromedio(nota1, nota2, nota3) {
    let promedio=(nota1 + nota2 + nota3) / 3;
    return promedio;
}

function calcularPromedioEstudiantes() {
    let n= parseInt(prompt("Ingrese la cantidad de estudiantes que hay"));

    for(let i= 1; i <= n; i++){
        alert(`Ìngrese las notas del estudiante ${i}`);


        let nota1=parseFloat(prompt("Ingrese Nota 1"));
        let nota2=parseFloat(prompt("Ingrese Nota 2"));
        let nota3=parseFloat(prompt("Ingrese Nota 3"));

        let promedio=calcularPromedio(nota1,nota2,nota3);

        alert(`El promedio del estudiante ${i} es: ${promedio}`)
    }
}

calcularPromedioEstudiantes();