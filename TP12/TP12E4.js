/*Hacer una función que, dado un string, verifique si en la misma existe una
palabra que ingresa el usuario. La función debe devolver un fragmento de la
cadena que incluya desde la palabra en cuestión hasta el final de la cadena
(en caso de que la palabra no exista deberá devolver -1).*/

function verificar(oracion, palabra) {
	let indice = 0;

	indice = oracion.indexOf(palabra);;

	if (indice >= 0) {
		return oracion.slice(indice);
	}else{
		return indice;
	}
	 
}

let frase = "Si utilizas al enemigo para derrotar al enemigo, serás poderoso en cualquier lugar donde vayas.";
let fragmento = prompt("palabra a buscar...");

console.log(verificar(frase, fragmento));