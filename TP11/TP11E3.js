/*Hacer una función que permita contar la cantidad de palabras de una 
cadena de caracteres, terminada en punto, y devolver la longitud de 
la palabra más larga que comienza con 'a'.*/


function contarPalabras(cadena) {
	let cantPalabras = 0;
	let maxA = 0;
	let palabra = "";
	let indice = 0;

	while(cadena[indice] != "."){
		
		if (cadena[indice] != " ") {
			palabra += cadena[indice];
			indice ++;
		}else{
			if(palabra[0] == "a"){
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

	if(palabra[0] == "a"){
		if(palabra.length > maxA){
			maxA = palabra.length;
		}
	}
	cantPalabras ++;
		
	return maxA;
}

contarPalabras("Estas son palabras para ser contadas y a ver si averiguan cuantas hay.");