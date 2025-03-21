/* 14. Escriba una función la cual permita o no la entrada 
a un parque de atracciones, dicha función recibe la edad,
estatura y permiso parental como parámetros. Para permitir
el acceso el usuario deberá de ser mayor de edad y medir más
de 150 cm, en caso de ser menor de edad debe contar con un
permiso parental para que sea concedido el acceso.*/

function entradaParque(edad, estatura, permisoParental){
    if (edad >=18 ) {
        if (estatura >= 150) {
            console.log("Tienes la altura adecuanda puedes ingresar");
        }else{
            console.log("No puedes ingresar tienes que tener mas de 150 cm de altura");
        }
        console.log("Si puede aaceeder al parque");
        
    }else{
        console.log("El tiene permiso parental para aceeder al parque");
    }

}

entradaParque(20,160);
