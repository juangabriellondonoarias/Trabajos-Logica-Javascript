// /*23. Escriba un programa que genere una contraseña segura
// a partir de una palabra base y una serie de reglas. Usa dos funciones: 
// ● generarContraseña(palabraBase): genera una contraseña agregando números y caracteres especiales. 
// ● imprimirContraseña(contraseña): muestra la contraseña generada.*/

function generarContraseña(palabraBase){
    let contraseña= palabraBase;

    let numeroAleatorio = Math.floor(Math.random() * 100);
    contraseña += numeroAleatorio;

    const caracteresEspeciales = ['1','2','3','4','5','6','7','8','9','@', '#', '!', '$', '%', '&', '*'];
        const aleatorio = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
        contraseña += aleatorio;

            while (contraseña.length < 20) {
                contraseña += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
                }

        return contraseña;
}

function imprimirContraseña(contraseña){
    console.log(`La contraseña es: ${contraseña}`);
    return contraseña;
}

const palabraBase= 'segura';
let contrasenaGenerada= generarContraseña(palabraBase);
imprimirContraseña(contrasenaGenerada);
