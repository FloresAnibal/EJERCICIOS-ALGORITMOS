/*Hacer una función contarLetraP que permita contar
la cantidad de palabras que comienzan con “P” de 
una cadena de caracteres que finaliza con un punto "."*/

function contarLetraP(cadena) {
	let cantP = 0;
	let palabra = "";
	let indice = 0;

	while(cadena[indice] != "."){
		
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
		}
		else {
			if(palabra[0] == "P" || palabra[0] == "p") {
				cantP++;
				palabra = "";
				indice++;
			}
			else{
				palabra = "";
				indice++;}
		}
		
	}
	if (palabra[0] == "P" || palabra[0] == "p") {cantP++;}

	return cantP;
}