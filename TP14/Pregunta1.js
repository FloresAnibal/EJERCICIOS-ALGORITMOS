function buscar(argument, valorBuscado) {
	for (var i = 0; i < argument.length; i++) {	
		if(argument[i] == valorBuscado){	
			return i;	
		}
	}
	return -1	
}

let vector = [13, 13, 12, 15, 4, 2, 10, 14, 19, 2, 18, 5, 6, 14, 3, 12, 20, 7, 11, 10, 2, 17, 7, 9, 17, 9, 8, 8, 3, 12, 12];
let equipos = 8;
console.log(buscar(vector, equipos));