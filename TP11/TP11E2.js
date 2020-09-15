/*Hacer una función que permita contar la cantidad de veces que 
aparece una palabra dentro de una cadena de caracteres. La cadena 
de caracteres, terminada en punto, y la palabra buscada son 
ingresadas por el usuario.*/

function buscarPalabra(cadena, palabraBuscada) {
	let cantPalabras = 0;
	let palabra = "";
	let indice = 0;
	let i2 = 0;

	while(cadena[indice] != "."){
		
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
		}
		else {
			if(palabraBuscada.length == palabra.length) {
				
				while ((palabraBuscada[i2] == palabra[i2]) && i2 < palabra.length) {
					i2++;
				}
				if(i2 == palabraBuscada.length){
					cantPalabras++;
				}
				
				palabra = "";
				indice++;
				i2 = 0;
			}
			else{
				palabra = "";
				indice++;}
		}
		
	}
	return cantPalabras;
}	
let oracion = "";
let buscar = "";

oracion = prompt("Cual es la oracion?");
buscar = prompt("Que palabra buscamos?");

buscarPalabra(oracion, buscar);