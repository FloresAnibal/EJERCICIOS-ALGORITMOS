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

function esPalindromo(oracion) {

	let texto = "";
	let resultado = false;

	texto = quitarEspacios(oracion);
	texto = texto.toUpperCase();
	// a ver si a acordas que hace esto mañana jajaja
	for (var i = 0; i < texto.length / 2; i++) {
		if (texto.endsWith(texto[i], (texto.length - i))) {
			resultado = true;
		}else{
			return false
		}
	}

	return true;
}


//omitir para el moodle
let frase = "La ruta nos aporto otro paso natural";

console.log(esPalindromo(frase));

//CUMPLE CON LAS PRUEBAS!!!