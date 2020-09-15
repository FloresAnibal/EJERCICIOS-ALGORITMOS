function encontrarTe(cadena) {
	let indice = 1;
	let tes = 0;
	while (indice < cadena.length) {
		
		if (cadena[indice] == "e" || cadena[indice] == "E"){
			if (cadena[indice - 1] == "t" || cadena[indice - 1] == "T") {
				tes++;
			}
		}
	indice ++;			
	}
	return tes;
}

function contarTE(cadena) {
	let cantOraciones = 0;
	let indice = 0;
	let oracion = "";
 
	while(indice < cadena.length){

		while(cadena[indice] != "." && indice < cadena.length){
			oracion+= cadena[indice];
			indice++;
			
		}

		if (encontrarTe(oracion) > 2) {
			cantOraciones++;
		}
		
		oracion = "";
		indice++;
    
	}	
	return cantOraciones;
}