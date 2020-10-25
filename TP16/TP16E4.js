/*Dada una matriz de números de 3 x 3, realizar un programa para que: 
a) Imprima los elementos de las filas pares de la matriz. 
b) Imprima los elementos de las columnas impares de la matriz. 
c) Imprima los elementos de la diagonal principal.  */

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

console.log("-----FILAS PARES-----");
for (var f = 0; f < matriz.length; f++) {
	for (var c = 0; c < matriz[f].length; c++) {
		if(f % 2 == 0){
			
			console.log(matriz[f][c]);	//imprimo el contenido de filas pares
		}
		
	}
}

console.log("-----COLUMNAS IMPARES-----");
for (var c = 0; c < matriz[0].length; c++) {
	for (var f = 0; f < matriz.length; f++) {
		if(c % 2 != 0){
			console.log(matriz[f][c]);	//imprimo el contenido de columnas impares
		}
	}
}

console.log("-----DIAGONAL PRINCIPAL-----");
for (var i = 0; i < matriz.length; i++) {
	console.log(matriz[i][i]);	//imprimo la diagonal principal. (Otra forma, en el ejercicio anterior)
}