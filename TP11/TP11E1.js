/*Hacer una función que dado un string o cadena de caracteres, 
terminada en punto, genere una nueva cadena con las mismas palabras 
pero no pueden haber espacios en blanco antes de la primera palabra 
y después de la última. Y debe haber un solo espacio en blanco entre 
palabras.*/


function quitarEspacios(cadena) {
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(cadena[indice] != "."){
		
		if (cadena[indice] != " ") {
			palabra += cadena[indice];
			indice ++;
		}else{
			if(palabra.length > 0){
				if (nuevaPalabra.length > 0) {
					nuevaPalabra += " " + palabra;
				}else{
					nuevaPalabra += palabra;
				}
				
				palabra = "";
				indice++;
			}else{
				indice++;
			}

		}
			
	}
	return nuevaPalabra;
}

console.log(quitarEspacios("  Esta es la  prueba .")); 
