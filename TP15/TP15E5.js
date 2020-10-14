/*Realizar una función que reciba un array y una palabra por parámetro. Si la palabra                              
existe en el array, eliminarla, si no existe, agregarla al principio del mismo.  */

function agregar_o_eliminar(array, palabra) {
	if (array.includes(palabra)) {	//verifico si existe la palabra recibida

		array.splice(array.indexOf(palabra), 1);	//elimino la palabra. La compliqué con los parámetros jajaja

	}else{	//ELSE se ejecuta si la palabra no existe
		
		array.unshift(palabra);	//agrego la palabra al inicio
	}
	return array;	//devuelvo el array
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let arreglo = ["Fashion", "Wave", "Start"];

console.log(agregar_o_eliminar(arreglo, "WavE"));