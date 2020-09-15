/*Hacer una función que reciba un string y una palabra y luego analice: si
encuentra esa palabra en en string, devolver una nueva cadena que diga
“Encontré la palabra en la posición xx”, reemplazando en “xx” la posición en
la que se encontró.*/

function verificar(oracion, palabra) {
	let indice = 0;

	indice = oracion.indexOf(palabra);;

	if (indice >= 0) {
		return "Encontré la palabra en la posición " + indice;
	}else{
		return "No encontré la palabra";
	}
	 
}

let frase = "Si utilizas al enemigo para derrotar al enemigo, serás poderoso en cualquier lugar donde vayas.";
let fragmento = "derrotar";

console.log(verificar(frase, fragmento));