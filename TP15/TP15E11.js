/*Nos encontramos con el desafío de incorporar una pequeña mejora al sistema de
quinielas de la provincia No Pego Una S.E., y como primera demo de 
implementación de un sistema informatizado, nos proponemos un script que permita
almacenar en un vector de 4 posiciones los números de los bolilleros.*/

let numero = [];

for (var i = 0; i < 4; i++) {
	numero.push(prompt("Ingresar numero"));
}

console.log(numero);