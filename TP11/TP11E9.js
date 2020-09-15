/*Hacer una función que reciba una frase o párrafo, 
lo procese y retorne la palabra más larga encontrada.*/

function palabraLarga(cadena) {
	let palabra = "";
	let indice = 0;
	let bandera = false;
	let palabraXL = "";
 
	while(indice < cadena.length){
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
			bandera = true;
		}
		else if(bandera == true){
				if (palabra.length > palabraXL.length) {
					palabraXL = palabra;
				}
				palabra = "";
				indice++;
				bandera = false;}
			else{
				indice++;}
	}
    if(bandera == true){
		if (palabra.length > palabraXL.length) {
			palabraXL = palabra;
		}
	}
		
	return palabraXL;
}

console.log(palabraLarga("   Hola    mundo   soy una frase .    "));