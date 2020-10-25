/*Escriba un script que reciba una matriz de N x M y retorne el máximo y 
el mínimo elemento de la matriz, y en qué posición se encuentran.*/

let matriz = new Array(2);	//Array de 2 filas
let num = 1;	//variable para cargar la matriz
let max = 0;	//para el maximo
let min = 0;	//para el mínimo
let posMax = [0, 0];	//para guardar la posición del máximo
let posMin = [0, 0];	//para guardar la posición del mínimo

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3);	//dimensiono las columnas
}

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		matriz[f][c] = num++;	//cargo la matriz por fila con números correlativos
	}
}

max = min = matriz[0][0];	//le asigno a min y max el valor de la matriz en un punto determinado

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		if (matriz[f][c] > max) {	//si es mayor a max...
			max = matriz[f][c];	//...cambio el valor de max...
			posMax[0] = f;	//...guardo la posición de la fila del máximo...
			posMax[1] = c;	//...guardo la posición de la columna del máximo
		}
		if (matriz[f][c] < min) {	//si es menor que min...
			min = matriz[f][c];	//...cambio el valor de min...
			posMin[0] = f;	//...guardo la posición de la fila del mínimo...
			posMin[1] = c;	//...guardo la posición de la columna del mínimo
		}
	}
}

console.log('Mínimo = ' + min + " en " + posMin);
console.log('Máximo = ' + max + " en " + posMax);

//Nota: debería de haber utilizado una función