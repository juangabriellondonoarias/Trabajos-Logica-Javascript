/* 1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case. */

let lado1= 36;
let lado2= 70;
let lado3= 74;

let sumaTotal= lado1 + lado2 + lado3;

if (sumaTotal == 180) {
    console.log(`Los tres angulos internos si corresponden a un triangulo, ya que la suma de los tres es de ${sumaTotal}`);
} else{
    console.log("los angulos no correspponden al triangulo");
}
console.log("-------------------------");

switch (true) {
    case (sumaTotal == 180):
        console.log("si corresponde al triangulo");
        break;
    default:
        console.log("no corresponde a un lado del triangulo");
        break;
}