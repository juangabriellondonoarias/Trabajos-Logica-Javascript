/*20. Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos funciones:
● calcularArea(largo, ancho): calcula el área del rectángulo. 
● calcularPerimetro(largo, ancho): calcula el perímetro.*/

function calcularArea(largo,ancho) {
    let area= ancho * largo;
    return area;
}

let resultado= calcularArea(2,3);
console.log(`El area del rectangulo es de ${resultado}`);

console.log("---------------------------------");


function calcularPerimetro(largo1,ancho1) {
    let perímetro= (largo1 + ancho1) * 2;
    return perímetro; 
}

let resultado1= calcularPerimetro(8,6);
console.log(`El perimetro del rectangulo es de ${resultado1}`);


