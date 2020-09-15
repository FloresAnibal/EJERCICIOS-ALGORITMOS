/*Hacer una función que reciba como parámetro una frase y una palabra, la
función deberá devolver verdadero en caso de encontrar la palabra indicada,
dentro de la frase proporcionada, de lo contrario, devolverá falso. Suponer
que este comportamiento es el que se espera para un analizador de correo
spam.*/

function encontrar(oracion, palabra) {
	return oracion.includes(palabra);
}

let frase = "Si utilizas al enemigo para derrotar al enemigo, serás poderoso en cualquier lugar donde vayas.";

encontrar(frase, "poderoso");