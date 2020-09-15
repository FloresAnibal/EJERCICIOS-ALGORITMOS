function leerSecuencia(cadena) {
	let posicion = 0;
	let cantLetras = 0;

	while (cadena[posicion] != "."){
		if (cadena[posicion] == "v" && cadena[posicion + 1] == "a"){
			cantLetras = cantLetras + 1;
		}

		posicion = posicion + 1;
	}
	console.log(cantLetras);
}

let palabra = "Hola Mundo.";

leerSecuencia(palabra);