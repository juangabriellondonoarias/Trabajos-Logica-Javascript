/* 18. Escriba una función que tenga una cadena de ADN como parámetro
y retorne un string con el número de bases en ella, por ejemplo, si la 
cadena es “AACAGT” entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1,
Cantidad de G: 1, Cantidad de T: 1”*/

function contarBasesADN(cadenaADN) {
    let conteo = {
        'A': 0,
        'T': 0,
        'C': 0,
        'G': 0
    };

    for (let i = 0; i < cadenaADN.length; i++) {
        let base = cadenaADN[i];

        if (conteo.hasOwnProperty(base)) {
            conteo[base]++;
        }
    }

    console.log(`Cantidad de A: ${conteo['A']}`);
    console.log(`Cantidad de T: ${conteo['T']}`);
    console.log(`Cantidad de C: ${conteo['C']}`);
    console.log(`Cantidad de G: ${conteo['G']}`);
}

contarBasesADN('ATCGGCATCGTACATG'); 
