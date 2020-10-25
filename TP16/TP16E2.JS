/*Realizar un script para leer 9 valores que corresponden a una matriz 
de 3 filas x 3 columnas. Suponer que los valores se ingresan por columna. 
Se pide imprimir los elementos de las columnas impares de la matriz. */

let matriz = new Array(3);	//Array de 3 filas
let num = 1;	//variable para cargar la matriz

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3);	//dimensiono las columnas
}

for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		matriz[f][c] = num++;	//cargo la matriz por columna con números correlativos
	}
}

for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		if(c % 2 != 0){
			console.log(matriz[f][c]);	//imprimo el contenido de columnas impares
		}
	}
}