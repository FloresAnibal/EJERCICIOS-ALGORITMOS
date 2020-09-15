function leerSecuencia(cadena) {
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

	console.log(cantPalabras);
}
let frase = "Hola Mundo Soy una frase de prueba.";

leerSecuencia(frase);