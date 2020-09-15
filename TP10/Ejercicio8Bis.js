function leerSecuencia(cadena) {
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
	console.log(nuevaPalabra);

}
let frase = "Afilar y adornar el cuchillo.";

leerSecuencia(frase);

