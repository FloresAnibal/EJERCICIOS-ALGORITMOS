function leerSecuencia(cadena) {
	let cantPalabras = 0;
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra.length > 3) {cantPalabras++;}

		indice++;
		palabra = "";
	}

	console.log(cantPalabras);
}
let frase = "Hola Mundo. Soy una frase de prueba";

leerSecuencia(frase);