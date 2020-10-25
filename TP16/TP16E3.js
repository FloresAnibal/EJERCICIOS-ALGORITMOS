/* Realizar un script para leer 16 valores que corresponden a una matriz 
de 4 filas x 4 columnas. Suponer que los valores se ingresan por columna. 
Se pide imprimir los elementos de la diagonal principal de la matriz. */

let matriz = new Array(4);	//Array de 4 filas
let num = 1;	//variable para cargar la matriz

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(4);	//dimensiono las columnas
}

for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		matriz[f][c] = num++;	//cargo la matriz por columna con números correlativos
	}
}

for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		if( f == c){	//para determinar la diagonal principal. (Otra forma, en el ejercicio siguiente)
			console.log(matriz[f][c]);	//imprimo el contenido de la diagonal principal
		}
	}
}