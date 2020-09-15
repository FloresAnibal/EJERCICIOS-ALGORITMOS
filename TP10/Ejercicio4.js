function leerSecuencia(cadena) {
	let posicion = 0;
	let cantLetras = 0;

	while (cadena[posicion] != "."){
		if (cadena[posicion] == " "){
			cantLetras = cantLetras + 1;
		}

		posicion = posicion + 1;
	}
	console.log(cantLetras + 1);
}

let palabra = "Hola Mundo.";

leerSecuencia(palabra);