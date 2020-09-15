function leerSecuencia(cadena, letra1, letra2) {
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;
 
	while(indice < cadena.length){
		
		while((cadena[indice] != " ") && (indice < cadena.length)) {
			palabra+=cadena[indice];
			indice++;
		}
		
		if (palabra[0] == letra1 && palabra[palabra.length-1] == letra2) {
			nuevaPalabra += palabra + " ";}

		indice++;
		palabra = "";
	}

	console.log(nuevaPalabra);
}
let frase = "Hola Mundo. Soy una frase de prueba";
let caracter1 = "";
let caracter2 = "";

caracter1 = prompt("Decime el primer caracter");
caracter2 = prompt("Decime el segundo caracter");

leerSecuencia(frase, caracter1, caracter2);
