/*Hacer una función que reciba una cadena de caracteres y analice: si
encuentra palabras que inicien con “a”, finalicen con “o” y cuya longitud sea
mayor a 5. En caso afirmativo, la función deberá devolver una nueva cadena
con esas palabras convertidas en mayúsculas.*/

function inicioFin(cadena) {
	
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(indice < cadena.length){

		if(cadena[indice] != " "){
			palabra += cadena[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				if(palabra.startsWith("a") && palabra.endsWith("o") && palabra.length > 5){
				nuevaPalabra += palabra + " ";}
			}
		
			palabra = "";
			indice++;
		}
	}

	if(palabra.startsWith("a") && palabra.endsWith("o") && palabra.length > 5){
		nuevaPalabra += palabra + " ";}

	return nuevaPalabra.trim();

	}


let frase = "arriba abajo alforja abrojo jarra amanecio";
console.log(inicioFin(frase));