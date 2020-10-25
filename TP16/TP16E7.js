/* Escriba un script que reciba dos matrices A y B de N x N y retorne una 
matriz C, donde C se obtiene de la suma de A y B.*/

let matrizA = new Array(3);	//Array de 3 filas
let matrizB = new Array(3);	//Array de 3 filas
let num = 1;	//variable para cargar la matriz

for (var i = 0; i < matrizA.length; i++) {
	matrizA[i] = new Array(3);	//dimensiono las columnas de A
	matrizB[i] = new Array(3);	//dimensiono las columnas de B
}

for (var f = 0; f < matrizA.length; f++) {
	for (var c = 0; c < matrizA[f].length; c++) {
		matrizA[f][c] = num++;	//cargo la matrizA por fila con números correlativos
		matrizB[f][c] = num*2;	//cargo la matrizB por fila con el valor de A multiplicado por 2
	}
}

function sumar(arregloA, arregloB) {
	let matrizC = new Array(arregloA.length);	//array de igual cantidad de filas que la matriz recibida

	for (var j = 0; j < matrizC.length; j++) {
		matrizC[j] = new Array(arregloA.length);	//dimensiono las columnas
	}

	for (var f = 0; f < matrizC.length; f++) {
		for (var c = 0; c < matrizC[f].length; c++) {
			matrizC[f][c] = arregloA[f][c] + arregloB[f][c];	//voy suamando los contenidos
		}
	}
	return matrizC;	//retorno la neva matriz con los resultados
}

console.log(sumar(matrizA, matrizB));

//Nota: diseñada para trabajar con matrices cuadradas