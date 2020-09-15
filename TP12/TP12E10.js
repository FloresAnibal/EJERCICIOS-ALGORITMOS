/*Hacer una función que reciba una frase y este deba calcular un código de
clave “identificación único”, como si se tratara de un hash. Para realizar la
aplicación, el “código único” se generará a partir de la concatenación de los
caracteres impares de la frase, con el valor Unicode del caracter en el índice
par siguiente. Por ejemplo: para la frase “Hola Mundo” deberá devolver
“H111l97 77u110d111”*/

function codificar(argument) {
	
	let palabra = "";


	for (var i = 0; i < argument.length; i++) {
		
		if (i % 2 == 0) {
			palabra += argument[i];
		}else{
			palabra += frase.charCodeAt(i);
		}
		
	}

	return palabra;
}

let frase = "Hola Mundo";

console.log(codificar(frase));