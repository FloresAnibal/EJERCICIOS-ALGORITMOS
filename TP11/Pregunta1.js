function palabraLargaA(cadena) {
	let cantPalabras = 0;
	let maxA = 0;
	let palabra = "";
	let indice = 0;

	while(cadena[indice] != "."){
		
		if (cadena[indice] != " ") {
			palabra += cadena[indice];
			indice ++;
		}else{
			if(palabra[0] == "a" || palabra[0] == "A"){
				if(palabra.length > maxA){
					maxA = palabra.length;
				}
				
				palabra = "";
				indice++;
			}else{
				palabra = "";
				indice++;
			}
			cantPalabras ++;
		}


	}

	if(palabra[0] == "a" || palabra[0] == "A"){
		if(palabra.length > maxA){
			maxA = palabra.length;
		}
	}
	cantPalabras ++;
		
	return maxA;
}