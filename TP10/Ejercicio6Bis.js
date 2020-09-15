function leerSecuencia(cadena) {
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

	console.log(cantP);
}
let frase = "Hola Mundo Soy una frase de prueba.";

leerSecuencia(frase);