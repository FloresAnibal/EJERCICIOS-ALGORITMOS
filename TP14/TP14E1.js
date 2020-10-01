 /*El administrador de la cancha de Futsal “Panchito” solicitó un script que                        
gestione un vector que contiene la cantidad de equipos que han participado                        
en las ligas durante cada día del mes de Agosto. El mismo debe permitir                            
buscar dentro del array al día en el que participó el número de equipos que                              
indique como parámetro. Si no se encuentra ese valor buscado, se debe                        
retornar -1.(Ver pregunta 1 en Apartado A) */

function buscarDia(argument, valorBuscado) {
	for (var i = 0; i < argument.length; i++) {	//recorre todo el array
		if(argument[i] == valorBuscado){	//compara cada valor del array con el valor deseado
			return i + 1;	//si el valor deseado se encuentra en el array devuelvo el valor del indice mas 1 que coincide con el dia
		}
	}
	return -1	//de no encontrar lo que busco sale del for y devuelvo -1
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let datos = [146, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 152, 155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 182, 286, 127, 121, 230];
console.log(buscarDia(datos, 89));