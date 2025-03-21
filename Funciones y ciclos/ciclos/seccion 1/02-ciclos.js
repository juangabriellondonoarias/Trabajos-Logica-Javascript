/* 2. En un supermercado se tiene los siguientes productos:
lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba
el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.
Realice una versión con condicionales y otra con estructura switch-case.*/

alert("Ingrese el producto para saber si paga IVA o no.")
let selecionProducto=prompt("Ingrese el producto (lentejas, crema, arroz, vino)");


switch (selecionProducto) {
    case 'lentejas' : console.log("El producto: lentejas no paga IVA");
        break;
        case 'crema': console.log("El poducto: crema  no paga IVA");
        break;
        case 'arroz': console.log("El producto: arroz paga IVA");
        break;
        case 'vino': console.log("El producto: vino paga IVA");
        break;

    default:
        console.log("Este producto no se encuentra");
        
        break;
}
