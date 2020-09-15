function leerSecuencia(cadena) {
	let cantA = 0;
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra[palabra.length-1] == "A") {cantA++;}

		indice++;
		palabra = "";
	}

	console.log(cantA);
}
let frase = "Hola Mundo. Soy una frase de prueba";

leerSecuencia(frase);