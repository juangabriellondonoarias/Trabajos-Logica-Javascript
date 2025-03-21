// 15. Cree un programa que calcule horas y minutos a partir de segundos.


let segundos = 3665; 


let horas = Math.floor(segundos / 3600);
let minutos = Math.floor((segundos % 3600) / 60);

let segundosRestantes = segundos % 60;
console.log(`${segundos} segundos son equivalentes a ${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos.`);
