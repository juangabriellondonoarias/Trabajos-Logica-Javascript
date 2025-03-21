/* 15. Escriba una función generarContraseña la cual
reciba n como parámetro y esta cree una contraseña de 
n caracteres aleatorios. (Los caracteres pueden ser números, letras o signos).*/

function generarContraseña(n) {
    const caracteresPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let contraseña = '';
    
    for (let i = 0; i < n; i++) {
    
        const indiceAleatorio = Math.floor(Math.random() * caracteresPosibles.length);
        
        contraseña += caracteresPosibles[indiceAleatorio];
    }
    
    return contraseña;
}

let nuevaContraseña = generarContraseña(10);
console.log(nuevaContraseña); 
