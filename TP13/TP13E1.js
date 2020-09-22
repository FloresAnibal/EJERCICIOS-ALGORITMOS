let araryNumeros = [5, 9, 0, -5, -9, 7, 63, 10, 23, 15, 8, 10, 0, 12, 3, 45, -15, -20, 0];

function imrpimirPosCeros(array) {
	for (var i = 0; i < array.length; i++) {
		if(array[i] == 0) {
			console.log("Cero encontrado en la posición: " + i);
		}
	}
}

function imprimirPar(array) {
	for (var i = 0; i < array.length; i = i + 2) {
		console.log("Posición " + i + ": " + array[i]);
	}
}

function imprimirNegativo(array) {
	for (var i = 0; i < array.length; i++) {
		if(array[i] < 0) {
			//de encontrar un negativo, imprime y el RETURN finaliza la funcion para no seguir buscando
			return console.log("Primer elemento negativo en la poscición: " + i); 
		}
	}
	//si el IF no encuentra negativo imprime cero
	return console.log(0); 
}

function retornarCantidad(array, valor) {
	let cantidad = 0;
	
	for (var i = 0; i < array.length; i++) {
		if(array[i] == valor) {
			cantidad++;
		}
	}
	return console.log("El número " + valor + " aparece " + cantidad + " veces...");
}

imrpimirPosCeros(araryNumeros);
imprimirPar(araryNumeros);
imprimirNegativo(araryNumeros);
retornarCantidad(araryNumeros, 0);