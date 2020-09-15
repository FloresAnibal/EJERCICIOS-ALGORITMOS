function leerSecuencia(cadena) {
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra[0] == "A" && palabra[palabra.length-1] == "R") {
			nuevaPalabra += palabra + " ";}

		indice++;
		palabra = "";
	}

	console.log(nuevaPalabra);
}
let frase = "Hola Mundo. Soy una frase de prueba";

leerSecuencia(frase);