//NOTA: reescrito por mí y aunque es similar al del profe, tiene un pequeño detalle que se le escapó al profe jajaja. Y un agregado mío
//NOTA II: pensado y probado para y con números aunque en una prueba con string funcionó igual de bien.*/

function seleccion(array) {
	let minimo = 0;	//variable donde voy a guardar el índice que contenga el valro minimo del array
	let auxiliar = 0;	//variable donde voy a colocar el contenido de la poscición que voy a reemplazar con aquel de menor valor
	for (var i = 0; i < array.length-2; i++) {	//"array.length -22 porque no necesito llegar al último elemento en este For
												//para este caso con -2 llego al penúltimo elemento
		minimo = i;	//toma el valor de i para que se mueva por cada posición del array
		
		for (var j = i + 1; j <= array.length -1; j++) {													
			if(array[j] < array[minimo]){	//si el contenido del array que estoy a nalizando es menor al de la posicion minimo				
				minimo = j;	//cambio el valor de minimo por el indice que contiene el valor mas chico analizado
			}
		}

		if(array[i] != array[minimo]){	//si por ejemplo, hay dos valores iguales solo me aseguro de no ejecutar las lineas siguientes
		//despues de comparar todos los valores del array con el valor que tome de referencia... 
		auxiliar = array[i];	//almaceno el valor referencia para no perderlo en el reemplazo
		array[i] = array[minimo];	//reemplazo el valor referencia	por el valor mas chico que encontré en la comparación
		array[minimo] = auxiliar;	//acá, a la posición que tenía el valor mas chico le doy el valor que contenía el de referencia 
		}	
	}

	return array;	//devuelvo el array ya ordenado de menor a mayor
}