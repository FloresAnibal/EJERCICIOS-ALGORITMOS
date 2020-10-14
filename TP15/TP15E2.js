/* Realizar un script que reciba un valor por parámetro y lo compare un con vector                              
cargado con 5 valores numéricos. Si el valor ingresado es menor que el primer valor,                              
deberá incluir el mismo al inicio del array, si no es menor, deberá incluirlo después                              
del primer valor.*/

function agregar(argument) {
	let valores = [1, 2, 3, 4, 5];	

	if (argument < valores[0]) {
		valores.splice(0, 0, argument);
	}else{
		valores.splice(1, 0, argument);
	}
	
	return valores;
}

//NOTA: lo siguiente es solo para pruebas.
console.log(agregar(7));