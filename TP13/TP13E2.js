function cargarVector() {
	let vector = [];	//array donde se almacena los valores ingresados por el usuario
	let longitud = 0;	//variable para guardar la longitud del vector ya cargado

	for (var i = 0; i < 10; i++) {
		vector.push(prompt("Ingresar valor..."));
	}

	longitud = vector.length; //para usar en el FOR porque el POP modifica la longtud del array con cada iteración
	for (var i = 0; i < longitud; i++) {	
		console.log(vector.pop());	//POP extrae el elemento del array.
	}
}

cargarVector();