/* Realizar un script para leer 9 valores que corresponden a una matriz 
de 3 filas x 3 columnas. Suponer que los valores se ingresan por fila. 
Se pide imprimir los elementos de las filas pares de la matriz. */

let matriz = new Array(3);	//Array de 3 filas
let num = 1;	//variable para cargar la matriz

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3);	//dimensiono las columnas
}

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		matriz[f][c] = num++;	//cargo la matriz por fila con números correlativos
	}
}

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		if(f % 2 == 0){
			console.log(matriz[f][c]);	//imprimo el contenido de filas pares
		}
		
	}
}