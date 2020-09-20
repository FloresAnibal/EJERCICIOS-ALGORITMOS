/*Hacer una función llamada contarPalabras(cadena, limite, primera) 
que devuelva el número de palabras que cumplan con la condición 
proporcionada en los parámetros. La función recibe una frase, que 
representa a la cadena de caracteres en cuestión, límite, que 
representa al número máximo de caracteres que puede contener la 
palabra y primera, que representa al caracter con el que esperamos 
que comience.*/

function contarPalabras(cadena, limite, primera) {
	
	let cantidad = 0;
	let palabra = "";
	let indice = 0;
	
	cadena = cadena.toUpperCase();
	primera = primera.toUpperCase();

	while(indice < cadena.length){

		if(cadena[indice] != " "){
			palabra += cadena[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				if(palabra.startsWith(primera) && palabra.length <= limite) {
					cantidad++;
				}
			}
		
			palabra = "";
			indice++;
		}	
	}

	if (palabra.length > 0) {
		if(palabra.startsWith(primera) && palabra.length <= limite) {
			cantidad++;
		}
	}

	return cantidad;

	}

console.log(contarPalabras('Aquí es donde plantaremos nuestra planta de naranja lima', 7, 'N'));