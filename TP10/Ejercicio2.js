function leerSecuencia(cadena) {
	let posicion = 0;
	let cantLetras = 0;

	while (cadena[posicion] != "."){
		if (cadena[posicion] == "f") {
			cantLetras = cantLetras + 1;
		}

		posicion = posicion + 1;
	}
	console.log(cantLetras);
}

let palabra = "Hola Mundo.";

leerSecuencia(palabra);