/*Hacer una función llamada cuantosTienenTres
que permita contar la cantidad de palabras 
que tienen más de tres caracteres en una 
frase que finalice en un "." (punto).*/

function cuantosTienenTres(cadena) {
	let cantPalabras = 0;
	let palabra = "";
	let indice = 0;
 
	while(cadena[indice] != "."){
		
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
		}
		else {
			if(palabra.length > 3) {
				cantPalabras++;
				palabra = "";
				indice++;
			}
			else{
				palabra = "";
				indice++;}
		}
	}
	if(palabra.length > 3) {
		cantPalabras++;}

    return cantPalabras;
}