/* Ahora que ya tenemos al vector con la información ordenada una vez                        
resuelto el ejercicio anterior. Se pide incorporar un script diferente, más                      
eficiente para resolver el Punto 1 tomando en cuenta que el vector en                          
cuestión se encuentra ordenado.*/

/*NOTA: si bien este ejercicio está relacionado al anterior y al primero, 
no sigue una línea en lo que a código se refiere. Cumple las consignas pero 
lo voy adaptando conforme avanzo*/

function ordenar_y_buscar(array, valorBuscado) {
	//esta es mi funcion Seleccion ya comentada en GitHub pero con algunas modificaciones
	
	//***************ORDENAMIENTO***************************************************
	let indiceParalelo = [];	//agregado para el ejercicio
	let minimo = 0;	
	let auxiliar = [];	//cambiado el tipo de variable en relación al original
	let indiceAux = 0;	//agregado para el ejercicio
	
	for (var h = 0; h < array.length; h++) {
		indiceParalelo.push(h+1);	//cargo el array con valores correlativos iniciando en 1
	}
	
	for (var i = 0; i < array.length-2; i++) {	
		minimo = i;	
		for (var j = i + 1; j <= array.length -1; j++) {													
			if(array[j] < array[minimo]){	
				minimo = j;	
			}
		}

		if(array[i] != array[minimo]){
		auxiliar = array[i];
		indiceAux = indiceParalelo[i];	//agregado para el ejercicio

		array[i] = array[minimo];
		indiceParalelo[i] = indiceParalelo[minimo];	//agregado para el ejercicio

		array[minimo] = auxiliar;
		indiceParalelo[minimo] = indiceAux;	//agregado para el ejercicio	
		}	
	}
	//*****************************************************************************

	//***********************BUSQUEDA**********************************
	
	for (var k = 0; k < array.length; k++) {	//recorre todo el array
		if(array[k] == valorBuscado){	//compara cada valor del array con el valor deseado
			return indiceParalelo[k];	//si el valor deseado se encuentra en el array devuelvo el valor de vector paralelo
		}
	}

	return -1;	//si no encuentro el valor, devuelvo -1
}


//NOTA II: lo siguiente es solo para pruebas. No va en el moodle
let datos = [146, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 152, 
			155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 
			182, 286, 127, 121, 230];

console.log("El día fue: " + ordenar_y_buscar(datos, 152));
