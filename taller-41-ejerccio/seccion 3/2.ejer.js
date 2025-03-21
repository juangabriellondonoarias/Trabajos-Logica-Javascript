/* 2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.*/


let IVA=prompt("Ingrese uno de los productos(lentejas, crema, arroz y vino) para saber cual paga IVA y cual no.");

switch (IVA) {
    case 'lentejas':
        console.log("lentejas no paga IVA");
        break;
    case 'crema':
        console.log("crema si paga IVA");
        break;
    case 'arroz':
            console.log("arroz no paga IVA");
        break;
    case 'vino':
        console.log("vino si paga IVA");
        break;
    default:
        console.log("este producto no se encuentra en el listado");
        break;
}