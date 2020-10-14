function quitarEspacios(cadena) {	//quita espacios al principio, al final y los intermedios que sobren
	
	let nuevaCadena = "";	//variable donde voy a guardar la cadena sin espacios sobrantes
	let palabra = "";	//variable donde voy a guardar cada palabra que contenga la cadena recibida

	for (var indice = 0; indice < cadena.length; indice++) {	//para recorrer toda la cadena
		
		if (cadena[indice] != " ") {	//si el caracter en esa poscición NO contiene un espacio...
			
			palabra += cadena[indice];	//...guardo el caracter para formar una palabra
			
		}else{	//ELSE se ejecuta cuando el caracter que analizo SÍ es un espacio
			
			if(palabra.length > 0){	//controlo que mi variable "palabra" contenga algo dentro. Porque podría venir vacía
				
				if (nuevaCadena.length > 0) {	//quiero saber si "nuevaCadena" ya tiene alguna palabra dentro...	
					//...si ya tiene una palabra dentro
					nuevaCadena += " " + palabra;	//agrego un espacio para separar y luego la nueva palabra
				
				}else{	//ELSE se ejecuta si "nuevaPalabra" está vacía
					
					nuevaCadena += palabra;	//guardo la palabra extraída de la cadena recibida
				}

				palabra = "";	//ya guardada la palabra extraída, vacío la variable para una nueva
			}
		}			
	}
	return nuevaCadena;	//devuelvo la frase ya sin espcios de mas
}

console.log(quitarEspacios("  Esta  es una   frase  con     muchos espacios     ")); 

/*NOTA: en esencia, el código omite todos los espacios que encuentra. Toma la cadena recibida y extrae palabra por palabra, 
las pone pone en una nueva varidable con solo un espacio intermedio.*/
