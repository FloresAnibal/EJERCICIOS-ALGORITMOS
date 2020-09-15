function leerSecuencia(cadena) {
	let cantP = 0;
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra[0] == "P") {cantP++;}

		indice++;
		palabra = "";
	}

	console.log(cantP);
}
let frase = "Hola Mundo. Soy una frase de prueba";

leerSecuencia(frase);