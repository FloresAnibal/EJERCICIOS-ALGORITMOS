function leerSecuencia(cadena) {
	let contador = 0;
	while (cadena[contador] != "."){
		contador = contador + 1;
	}
	console.log("hola" + contador);
}

let palabra = "Hola Mundo.";

leerSecuencia(palabra);