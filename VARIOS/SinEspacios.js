function sinEspacios(cadena) {	//quita todos los espacios que encuentre
	
	let nuevaCadena = "";	//variable donde voy a guardar la cadena sin espacios

	for (var indice = 0; indice < cadena.length; indice++) {	//para recorrer toda la cadena
		
		if (cadena[indice] != " ") {	//si el caracter en esa poscición NO contiene un espacio...
			
			nuevaCadena += cadena[indice];	//...guardo el caracter 
		}	
				
	}
	return nuevaCadena;	//devuelvo la frase ya sin espcios
}

console.log(sinEspacios("  Esta  es una   frase  con     muchos espacios     ")); 

/*NOTA: en esencia, el código copia en "nuevaCadena" todos los caracteres excepto los espacios*/
