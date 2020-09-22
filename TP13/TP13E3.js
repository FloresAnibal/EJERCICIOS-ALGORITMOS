/*Para hallar los múltiplos de un número n, basta multiplicar n por cada uno de los números naturales 0, 1, 2,...
  El número 0 solamente tiene un múltiplo, que es el 0. Los demás números naturales tienen infinito número de múltiplos.
  El número 0 es múltiplo de todos los números.*/

function multiplos(vec, valor) {
	for (var i = 0; i < 20; i++) {
		vec.push(valor * i);	//multiplico y agrego el resultado al vector
	}

	return vec;	//regreso el vector ya cargado
}

function imprimirVector(vec) {	//función para imprimir los valores contenidos en un vector
	for (var i = 0; i < 20; i++) {
		console.log(vec[i]);	//los imprimo sin alterar el valor del vector
	}
}

let vector = [];	//array o vector que voy a utilizar

multiplos(vector, 5);	//llamo a la función y le paso el vector vacío y el valor "N"

imprimirVector(vector);	//llamo a la función y le paso el vector ya cargado previamente por la función anterio
						//para que imprima por consola los valores contenidos

