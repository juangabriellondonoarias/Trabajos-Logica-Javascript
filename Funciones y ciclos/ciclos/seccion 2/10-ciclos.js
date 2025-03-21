// 10. Cree un programa que calcule el promedio de 10 números

let numero1= parseFloat(prompt("ingrese el primer numero"));
let numero2= parseFloat(prompt("ingrese el segundo numero"));
let numero3= parseFloat(prompt("ingrese el tercer numero"));
let numero4= parseFloat(prompt("ingrese el cuarto numero"));
let numero5= parseFloat(prompt("ingrese el quinto numero"));
let numero6= parseFloat(prompt("ingrese el sexto numero"));
let numero7= parseFloat(prompt("ingrese el septimo numero"));
let numero8= parseFloat(prompt("ingrese el octavo numero"));
let numero9= parseFloat(prompt("ingrese el noveno numero"));
let numero10= parseFloat(prompt("ingrese el decimo numero"));


function promedioNumeros() {
    let suma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10;
    let promedio = suma / 10;
    return promedio;
}

let resultado= promedioNumeros();
console.log(`El promedio de los 10 numeros ingresados es ${resultado}`);



s