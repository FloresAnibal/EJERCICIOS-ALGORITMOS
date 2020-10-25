/* Dada una matriz de 3 x 3, generar un vector donde la componente i de 
dicho vector sea la suma de los elementos de la fila i-ésima de la matriz. 
Imprimir la matriz y el vector.  */

let matriz = new Array(3);	//Array de 3 filas
let num = 1;	//variable para cargar la matriz
let vector = [0, 0, 0];	//vector con tres posiciones

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
		vector[f] += matriz[f][c];	//sumo cada fila en la posición correspondiente
	}
}

console.log(vector);