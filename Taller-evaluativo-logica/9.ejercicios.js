alert("Registro nuevo usuario, por favor completar el formulario")

let documento=parseInt(prompt("Ingrese el documento "));
let nombres=prompt("Ingrese los Nombres");
let apellidos=prompt("Ingrese los apellidos");
let edad = parseInt(prompt("Ingrese la edad"));
let peso=parseFloat(prompt("Ingrese el peso"));
let estatura= parseFloat(prompt("Ingrese la estatura"));

let persona ={documento: documento,
            nombres: nombres,
            apellidos: apellidos,
            edad: edad,
            peso: peso,
            estatura: estatura
};

function mostrarRegistro(persona) {
let resultado= persona;
return resultado;
    
}
mostrarRegistro(persona);

console.log("Registro exitoso.");

alert(`Tus datos quedaron guardados exitosamente`);

function consultarRegistro() {
    let documento1=parseInt(prompt("Si desea ver tus datos, Digite el documento para ver los resultados"));
    if (documento1 == documento) {
        documento1=persona;
        return (documento1(alert(
            `Documento es ${documento},
            Nombre: ${nombres},
            Apellido: ${apellidos},
            Edad : ${edad},
            Peso: ${peso} Kg,
            Estatura: ${estatura}`
        ))); 
    }else{
        console.log("error, ingrese el numero de documento bien escrito");
    }
}

let resu1= consultarRegistro();
console.log(resu1);

