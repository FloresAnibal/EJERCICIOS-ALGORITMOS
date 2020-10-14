/* Realizar un script que reciba un array con distintos tipos de valores. Recorrer el                            
array hasta encontrar el primer elemento de tipo string y retorna la posición de este                              
elemento.*/

//NOTA: suponiendo que el elemento exixte siempre

function tipo(array) {
	for (var i = 0; i < array.length; i++) {	//recorro el array
		if(typeof array[i] == "string"){	//pregunto si el tipo en esa posición es "string"
			return i;	//devuelvo el indice y se interrumpe el For
		}
	}
}

//NOTA II: lo siguiente es solo para pruebas. No va en el moodle
let tipos = [2, false, new Date(), "soy yo"];

console.log("En la posición: " + tipo(tipos));