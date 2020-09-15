function nuevaFraseMayuscula(cadena) {
	
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;

	while(indice < cadena.length){

		if(cadena[indice] != " "){
			palabra += cadena[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				palabra = palabra.toLowerCase(); //agregado para el moodle. SE PUEDE OPTIMIZAR
				if(palabra.startsWith("a") && palabra.endsWith("o") && palabra.length > 5){
				nuevaPalabra += palabra + " ";}
			}
		
			palabra = "";
			indice++;
		}
	}

	palabra = palabra.toLowerCase();//agregado para el moodle. SE PUEDE OPTIMIZAR

	if(palabra.startsWith("a") && palabra.endsWith("o") && palabra.length > 5){
		nuevaPalabra += palabra;
	}

	nuevaPalabra = nuevaPalabra.trim();//agregado para el moodle. SE PUEDE OPTIMIZAR

	if(nuevaPalabra.length > 0){//agregado para el moodle. SE PUEDE OPTIMIZAR
		nuevaPalabra += ".";
	}
	

	return nuevaPalabra.toUpperCase();

	}

// omitir en el moodle
let frase = "Mi armario esta infestado de acaros es una lastima porque acabo de adquirirlo";
console.log(nuevaFraseMayuscula(frase));

//CUMPLE CON LAS PRUEBAS!!!