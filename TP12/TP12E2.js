/*Hacer una función que, dado un string y un carácter, devuelva una cadena de
caracteres con todas las palabras que comienzan y terminan con ese
caracter.*/

function inicioFin(cadena, caracter) {
	
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(indice < cadena.length){

		if(cadena[indice] != " "){
			palabra += cadena[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				if(palabra.startsWith(caracter) && palabra.endsWith(caracter)){
				nuevaPalabra += palabra + " ";}
			}
		
			palabra = "";
			indice++;
		}
	}

	if(palabra.startsWith(caracter) && palabra.endsWith(caracter)){
		nuevaPalabra += palabra + " ";}

	return nuevaPalabra.trim();

	}


let frase = "arriba abajo alforja arbol jarra asta";
console.log(inicioFin(frase, "a"));
