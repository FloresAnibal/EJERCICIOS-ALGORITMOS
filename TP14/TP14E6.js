/*Para mejorar el proceso de búsqueda que desarrollamos anteriormente                  
(Punto 1) para el administrador de una cancha de Futsal “Panchito”,                      
incorporar un script que reciba el vector y lo ordene en forma ascendente,                          
para ello debe utilizar el método de ordenación de Selección.*/

//NOTA: no entendí qué es lo que quiere este ejercicio exactamente jaja

function seleccion(array) {	//función ya comentada en GitHub
	let minimo = 0;	
	let auxiliar = 0;	
	for (var i = 0; i < array.length-2; i++) {	
		minimo = i;	
		for (var j = i + 1; j <= array.length -1; j++) {													
			if(array[j] < array[minimo]){	
				minimo = j;	
			}
		}

		if(array[i] != array[minimo]){
		auxiliar = array[i];	
		array[i] = array[minimo];
		array[minimo] = auxiliar;	
		}	
	}

	return array;	
}

//*****************Ejercicio 1*********************************************************************************************************
function buscarDia(argument, valorBuscado) {
	for (var i = 0; i < argument.length; i++) {	//recorre todo el array
		if(argument[i] == valorBuscado){	//compara cada valor del array con el valor deseado
			return i + 1;	//si el valor deseado se encuentra en el array devuelvo el valor del indice mas 1 que coincide con el dia
		}
	}
	return -1	//de no encontrar lo que busco sale del for y devuelvo -1
}
//*************************************************************************************************************************************

//NOTA II: lo siguiente es solo para pruebas. No va en el moodle
let datos = [146, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 152, 
			155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 
			182, 286, 127, 121, 230];

console.log("El día fue: " + buscarDia(datos, 89));

let ordenados = seleccion(datos);

console.log('Ordenamiento por Slección');
console.log(ordenados);