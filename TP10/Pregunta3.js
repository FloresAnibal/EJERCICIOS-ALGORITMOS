/*Hacer una función llamada cadenaAR  que, 
dado una cadena de caracteres (finalizada 
	en un punto "."), genere una nueva 
cadena con todas las palabras que comienzan 
con el caracter “A” y finalizan con el caracter “R”. */

function cadenaAR(cadena) {
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(cadena[indice] != "."){
		
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
		}
		else {
			if((palabra[0] == "A" || palabra[0] == "a") && (palabra[palabra.length-1] == "R" || palabra[palabra.length-1] == "r")) {
				if (nuevaPalabra.length > 0) {
					nuevaPalabra += " " + palabra;
				}
				else{nuevaPalabra += palabra;}
				
				palabra = "";
				indice++;
			}
			else{
				palabra = "";
				indice++;}
		}
		
	}

	if((palabra[0] == "A" || palabra[0] == "a") && (palabra[palabra.length-1] == "R" || palabra[palabra.length-1] == "r")) {
		if (nuevaPalabra.length > 0) {
			nuevaPalabra += " " + palabra;
		}
		else{nuevaPalabra += palabra;}

	}	
	return nuevaPalabra;

}
