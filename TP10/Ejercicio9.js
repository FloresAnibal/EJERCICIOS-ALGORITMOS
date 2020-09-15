function leerSecuencia(cadena, caracter) {
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra[0] == caracter) {
			nuevaPalabra += palabra + " ";}

		indice++;
		palabra = "";
	}

	console.log(nuevaPalabra);
}
let frase = "Hola Mundo. Soy una frase de prueba";
let caracter = "";

caracter = prompt("Decime un caracter");

leerSecuencia(frase, caracter);