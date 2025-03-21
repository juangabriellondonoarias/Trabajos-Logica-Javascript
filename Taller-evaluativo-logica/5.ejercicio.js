let persona = {edad: 20, peso:75, nombres:"pedro",
                apellidos:"Perez Perez"}

for (let index = 0; index < persona; index++) {
}

for(let clave in persona){

persona.peso= 77;

persona['edad'] = 21;

delete persona.apellidos;
    console.log(clave + ":" + persona[clave]);
    
}

