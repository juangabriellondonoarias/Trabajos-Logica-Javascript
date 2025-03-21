// Una función que reciba dos números y retorne el mayor si lo hay

function retornarMayor(a,b) {
    if (a > b) {
        return `El numero mayor es ${a} y el menor ${b}`
    } else if (b > a) {
        return `El numero mayor es ${b} y el menor ${a}`
    } else{
        return(`Los numeros son iguales ${a} == ${b}`);
    }
    
};

console.log(retornarMayor(45,43));
