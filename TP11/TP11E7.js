/*Escribir un programa que permita ingresar una frase y un caracter 
cualquiera. En caso que el caracter exista dentro de esa cadena, se 
imprimirá la posición en que se encuentre y se repetirá todo otra vez 
(es decir, se ingresará otra cadena y otro caracter a buscar). El 
programa termina cuando una búsqueda devuelve cero. Para resolver el 
ejercicio, se deberá usar un módulo que reciba ambos datos y devuelva 
la posición en que se encuentre el carácter (o cero si no existe).*/


function buscar(frase, caracter) {
	let indice = 0;
	let posicion = 0;;

	while(indice < frase.length){
		if (frase[indice] == caracter) {
			posicion = indice + 1;
		}
		indice++;
	}
	return posicion;
}

let texto = "";
let caracter = "";
let salida = 1;

while(salida > 0){
	texto = prompt("Ingresa una frase...");
	caracter = prompt("Ingresa el caracter a buscar...");

	salida = buscar(texto, caracter);
	if(salida > 0){
		console.log("El caracter se encuentra en la posicion: " + salida);
	}
}