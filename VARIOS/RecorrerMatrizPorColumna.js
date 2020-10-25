let matriz = new Array(5);	//Array de 5 filas
let num = 1;	//variable para cargar la matriz

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(5);	//dimensiono las columnas
}

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		matriz[f][c] = num++;	//cargo la matriz por fila con números correlativos
	}
}

/*---------CARGA POR COLUMNA--------------------
for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		matriz[f][c] = num++;	//cargo la matriz por columna con números correlativos
	}
}
------------------------------------------------*/

for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		console.log(matriz[f][c]);	//recorro la matriz columna por columna, imprimiendo su contenido
	}
}