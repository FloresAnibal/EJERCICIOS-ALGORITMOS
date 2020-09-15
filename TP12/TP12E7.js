/*Hacer una función que reciba como parámetro una cadena de texto, la
función deberá retornar verdadero (true) en caso de que la cadena ingresada
sea un palíndromo, es decir, si se lee de la misma forma desde la izquierda y
desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro
paso natural". En caso contrario, deberá devolver falso. No se toman en
cuenta las tildes para el análisis.*/

function quitarEspacios(cadena){

	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(indice < cadena.length){
		if(cadena[indice] != " "){
			palabra += cadena[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				nuevaPalabra += palabra;
			}
			palabra = "";
			indice++;
		}
	}

	nuevaPalabra += palabra;

	return nuevaPalabra;
}

function palindromo(oracion) {

	let texto = "";
	let resultado = false;

	texto = quitarEspacios(oracion);
	texto = texto.toUpperCase();
	// a ver si a acordas que hace esto mañana jajaja
	for (var i = 0; i < texto.length / 2; i++) {
		if (texto.endsWith(texto[i], (texto.length - i))) { a
			resultado = true;
		}else{
			return false
		}
	}

	return resultado;
}

let frase = "La ruta nos aporto otro paso natural";

console.log(palindromo(frase));
