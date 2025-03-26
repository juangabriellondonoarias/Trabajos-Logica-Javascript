/* 2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento
corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos.*/


let usuarios= {
    "1139874307": "juan gabriel",
    "1023598648": "juanes",
    "1094948690": "samuel",
    "1094537337": "gabriela",
    "1096575979": "sofia",
    "1023425525": "miguel",
    "1094223553": "juan jose",
    "1443435556": "sebas",
    "1234343535": "carlos",
    "1098645322": "camilo",
}


console.log("Nombres de los usuarios:");
for (let documento in usuarios) {
    console.log(usuarios[documento]);
}
