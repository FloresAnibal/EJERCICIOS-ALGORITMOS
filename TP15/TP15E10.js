/* Realizar un script que reciba una cadena de caracteres alfanumérica 
que contiene varias ocurrencias de un caracter especial ingresado por 
el usuario. Transforme sus elementos en array y retorne únicamente los 
elementos de tipo numérico.*/

function extraerNumeros(argument) {
	let array = [];	//para gugardar los valores del string
	let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];	//para comparar y saber si es un número
	let arrayNumeros = [];	//para guardar los números que encuentre en el string

	for (var i = 0; i < argument.length; i++) {	//recorro el string
		array[i] = argument[i];	//paso cada caracter al array
	}

	for (var j = 0; j < array.length; j++) {	//recorro el array
		for (var k = 0; k < numeros.length; k++) {	//recorro el array con los números
			if(array[j] == numeros[k]){	//comparo el caracter con cada número para saber si coincide
				arrayNumeros.push(parseInt(array[j]));	//guardo el número convirtiéndolo en un entero
			}
		}
		
	}
	return arrayNumeros;	//devuelvo los números encontrados
}

let string = "";	//para guardar los caracteres ingresados

for (var i = 0; i < 10; i++) {	//repito 10 veces
	string += prompt("Ingresar valor");	//entrado por teclado
}

console.log(extraerNumeros(string));
