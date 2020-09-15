/*Hacer una función que, dado un string o cadena de caracteres, genere una
nueva cadena con las mismas palabras pero no pueden haber espacios en
blanco antes de la primera palabra y después de la última. Y debe haber un
solo espacio en blanco entre palabras.*/


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
				nuevaPalabra += palabra + " ";
			}
		
			palabra = "";
			indice++;
		}
	}

	nuevaPalabra += palabra;

	return nuevaPalabra;
}

let frase = "  soy   un desastre  de    frase    ";

console.log(quitarEspacios(frase.trim()));