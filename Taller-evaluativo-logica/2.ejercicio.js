function dosNumeros() {
    let a = 54;
    let b = 55;

    if (a > b) {
        console.log(`El numero mayor es ${a} y el menor es ${b}`);
    } else if(b > a){
        console.log(`El numero mayor es ${b} y el menor es ${a}`);
    }else{
        console.log(`Los numeros son iguales ${a} == ${b}`);
    }
    return a;
}

dosNumeros();