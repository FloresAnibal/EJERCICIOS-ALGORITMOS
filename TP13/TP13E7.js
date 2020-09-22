let huespedes = [];	//variable tipo Array

//suponiendo que se van a cargar los datos de todo el mes de una sola vez
function ingresarDatos() {
	for (var i = 0; i < 31; i++) {
		huespedes.push(parseInt(prompt("Ingresar cantidad..."))); //ingreso y guardo los valores
	}
}//sin RETURN porque el vector "huespedes" es modificado estando fuera de la función

function informeHotel(array) {
	let total = 0;

	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}

	console.log("Promedio de personas diarias: " + total / 31);
}

ingresarDatos();	//sin parámetros porque usará el vector huespedes como variable global

informeHotel(huespedes);	//le paso el vector que ya contiene los datos almacenados