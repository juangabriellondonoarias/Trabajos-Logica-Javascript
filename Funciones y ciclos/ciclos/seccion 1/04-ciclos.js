/*4. Cree un programa que lea los tres ángulos internos
de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra
con estructura switch-case.*/

let angulo1=parseInt(prompt("Ingrese el primer numero del angulo de un lado"));
let angulo2=parseInt(prompt("Ingrese el segundo numero del otro angulo  "));
let angulo3=parseInt(prompt("Ingrese el numero del ultimo angulo"));

let suma= angulo1 + angulo2 + angulo3;

if (suma == 180) {
    console.log("El angulo coresponde a un trinagulo");

}else{
    console.log("El angulo no corresponde a ningun triangulo");
    
}
console.log("--------------------------");

