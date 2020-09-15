/*Hacer una función que reciba un string o cadena de caracteres. 
La secuencia está dividida en oraciones que terminan en '.'. Para 
cada oración se pide contar la cantidad de veces que aparece la 
subsecuencia 'TE'. Como resultado se deberá retornar la cantidad 
de oraciones en las que la secuencia ha aparecido más de dos (2) veces.*/

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

function separarOraciones(cadena) {
	let cantOraciones = 0;
	let indice = 0;
	let oracion = "";
 
	while(indice < cadena.length){

		while(cadena[indice] != "."){
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

console.log(separarOraciones("Soy una frase. Y yo otra."));