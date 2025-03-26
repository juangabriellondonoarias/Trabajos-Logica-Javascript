/* 3. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco
países del continente seleccionado por el usuario. Use diccionarios. Use ciclos.*/

while (true) {
    let continente= prompt("Ingrese uno de los continentes (Asia, África, América, Antártida, Europa)");

if (continente === 'Asia') {
    let paisesAsia={
        pais1 : 'China',
        pais2: 'Japon',
        pais3: 'Corea del Norte',
        pais4 : 'Corea del Sur',
        pais5: 'Mongolia'
    }
    
alert("los 5 paises en Asia:");
for (let documento in paisesAsia) {
    alert(paisesAsia[documento]);
    }
} 
    else if (continente === 'África') {
    let paisesÁfrica= {
        pais1 : 'Angola',
        pais2: 'Argelia',
        pais3: 'Benin',
        pais4 : 'Botswana',
        pais5: 'Egipto'
    }

    alert("Los 5 paises en África")
    for (let documento in paisesÁfrica){
        alert(paisesÁfrica[documento])
    }
} 
    else if (continente === 'América') {
    let paisesAmérica={
        pais1: 'Canada',
        pais2:'Estados Unidos',
        pais3:'Mexico',
        pais4 : 'Guatemala',
        pais5: 'panama'
    }

    alert("los 5 paises en América")
    for (let documento in paisesAmérica){
        alert(paisesAmérica[documento])
    }
} 
    else if (continente === 'Antártida') {
    let paisesAntártida= {
        pais1: 'Argentina',
        pais2: 'Australia',
        pais3: 'Chile',
        pais4: 'Francia',
        pais5: 'Nueva Zelanda'
    }

    alert("Los 5 paises en Antártida")
    for (let documento in paisesAntártida){
        alert(paisesAntártida[documento])
    }
} else if (continente === 'Europa') {
    let paisesEuropa= {
        pais1:'Alemania',
        pais2:'Francia',
        pais3:'Italia',
        pais4: 'España',
        pais5: 'Reino Unido'
    }
    
    alert("Los 5 paises en Europa")
    for (let documento in paisesEuropa){
        alert(paisesEuropa[documento])
    }
    } else{
    alert("Este continente no esta")
    };
}

