/* 3. En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente compra a crédito, el
valor global del electrodoméstico aumenta en un 25%. Cree un programa que lea del usuario el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre al usuario el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/


const aumento= 0.25;
let precioUsuario= parseInt(prompt("Ingrese el precio del electrodomestico."));

let plazoMeses= parseInt(prompt("Ingrese el plazo de cuotas que deseas pagar."));

let credito = (precioUsuario * aumento) + precioUsuario;

let cuotas= credito / plazoMeses;

console.log(`El precio del producto es ${precioUsuario} pesos, el usuario tendra que pagar en total ${credito} pesos a credito ya que se le aumenta un 25%,
            tendra que pagar ${cuotas} pesos cada mes, durante ${plazoMeses} meses.`);
