/* Escriba un script que reciba una matriz de 3x3 y un vector columna. 
Se debe retornar la matriz ingresada donde todos los elementos deben 
estar multiplicados por el valor correspondiente a su columna almacenado 
en el vector. El valor correspondiente a la columna se obtiene a partir 
de que la misma posición del vector será la de la columna de la matriz. */

let matriz = new Array(3);	//Array de 3 filas
let num = 1;	//variable para cargar la matriz
let vector = [2, 3, 4];	//vector con tres valores

for (var i = 0; i < matriz.length; i++) {
	matriz[i] = new Array(3);	//dimensiono las columnas
}

for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		matriz[f][c] = num++;	//cargo la matriz por fila con números correlativos
	}
}

function multiplicar(arreglo, vec) {
	for (var f = 0; f < arreglo.length; f++) {
		for (var c = 0; c < arreglo[f].length; c++) {
			arreglo[f][c] *= vec[c];	//multiplico y guardo
		}
	}
	return arreglo;
}

console.log(multiplicar(matriz, vector));