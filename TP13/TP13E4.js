/*Para hallar los múltiplos de un número n, basta multiplicar n por cada uno de los números naturales 0, 1, 2,...
  El número 0 solamente tiene un múltiplo, que es el 0. Los demás números naturales tienen infinito número de múltiplos.
  El número 0 es múltiplo de todos los números.*/

function multiplos(vec, valor, cant) {
	//para este ejercicio controlo si recibo cero como número y me aseguro de cargar su múltiplo(0) solo una vez
	if (valor == 0) {
		vec.push(0);
	}else{
		for (var i = 0; i < cant; i++) {
			vec.push(valor * i);	//multiplico y agrego el resultado al vector
		}
	}

	return vec;	//regreso el vector ya cargado
}

function imprimirVector(vec) {	//función para imprimir los valores contenidos en un vector
	for (var i = 0; i < vec.length; i++) {
		console.log(vec[i]);	//los imprimo sin alterar el valor del vector
	}
}

let equis = 0;	//contendrá el valor para la cantidad de múltiplos. De ser 0 dará fin al programa
let ene = 0;	//contendrá el número
let vector = [];	//array o vector que voy a utilizar

equis = prompt("Ingrese cantidad de múltiplos: ");	//la primera vez solicito la carga fuera del WHILE
ene = prompt("Ingrese número: ");					//las siguientes serán adentro y se repetirán hasta que X valga cero

while (equis != 0) {	//si X vale cero no entra al WHILE y finalizará el programa
	multiplos(vector, ene, equis);	//llamo a la función y le paso el vector vacío, el valor "N" y el valor "X"

	imprimirVector(vector);	//llamo a la función y le paso el vector ya cargado previamente por la función anterio
							//para que imprima por consola los valores contenidos

	//finaliza la primera ejecución y se vuelve a pedir datos al usuario para la siguiente
	equis = prompt("Nuevamente ingrese cantidad de múltiplos: ");	
	ene = prompt("Nuevamente ingrese número: ");
	//ya no se sale del WHILE hasta que el usuario ingrese 0 en "equis"

	vector = []; //vacío el vector para cargar lo nuevos valores

	console.clear(); //para la limpiar la consola. SOLO PARA QUE LAS PRUEBAS SEAN MAS PROLIJAS
}
