/* 2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento
corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos.*/


let usuarios= {
    "1139874307": "Gabriel",
    "1023598648": "Juanes",
    "1094948690": "Samuel",
    "1094537337": "Gabriela",
    "1096575979": "Sofia",
    "1023425525": "Miguel",
    "1094223553": "Juan jose",
    "1443435556": "Sebastian",
    "1234343535": "Carlos",
    "1098645322": "Samilo",
}


console.log("Nombres de los usuarios:");
for (let documento in usuarios) {
    console.log(usuarios[documento]);
}
