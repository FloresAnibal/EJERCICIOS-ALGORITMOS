/*Realizar un script que reciba una cadena de caracteres, transforme sus 
elementos en array y retorne los elementos de las posiciones pares separados 
por coma. */

let frase = "Caminando en línea recta no puede uno llegar muy lejos.";
let array = [];	//para cargar la frase
let nuevaFrase = "";	//para cargar las posiciones pares

for (var i = 0; i < frase.length; i++) {	//recorro todo el string
	array.push(frase[i]);	//cargo el array con cada caracter por separado
}

for (let j = 0; j < array.length; j += 2) {	//recorro todo el array de dos en dos
	if(j == 0){	//solo para no agregar la coma al principio
		nuevaFrase += array[j];	//cargo el valor del array en un nuevo string
	}else{
		nuevaFrase += ", " + array[j];	//cargo el valor del array en un nuevo string con la coma 
	}
}

console.log(nuevaFrase);

