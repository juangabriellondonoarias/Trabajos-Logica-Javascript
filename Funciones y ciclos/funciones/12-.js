/* 12. Escriba una función la cual reciba 5 notas de un estudiante y genere 
un mensaje informando si el estudiante aprobó o no la materia, para que la 
materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0. */ 

let nota1= parseFloat(prompt("ingrese la nota #1"));
let nota2= parseFloat(prompt("ingrese la nota #2"));
let nota3= parseFloat(prompt("ingrese la nota #3"));
let nota4= parseFloat(prompt("ingrese la nota #4"));
let nota5= parseFloat(prompt("ingrese la nota #5"));

function notas() {
    let suma= (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (suma >= 3) {
        console.log(`El estudianto Aprobo la materia su promedio fue de ${suma}`);
    } else{
        console.log(`El estudiante NO aprobo la materia su promedio fue de ${suma}`);
    }
    return suma;
}

notas();
