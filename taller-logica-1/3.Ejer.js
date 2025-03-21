/* 3. En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

const credito= 0.5;

let ingresePrecio= parseInt(prompt("Ingrese el precio del electrodomestico"));
let plazoMeses= parseInt(prompt("Ingrese el plazo en meses para pagar"));

let electrodomestico= (ingresePrecio * credito) + ingresePrecio;

let plazo= electrodomestico / plazoMeses;

console.log(`El precio del producto es de ${ingresePrecio} pesos, las cuotas mensuales que debera pagar por el electrodomestico es de ${plazo} pesos,
            durante ${plazoMeses} meses`);
