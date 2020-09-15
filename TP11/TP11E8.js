/*Hacer una función que reciba un string o cadena de caracteres y 
determine si la misma se trata de una dirección de correo electrónico 
bien definida.
Considerar para esto las siguientes reglas:
a. Debe comenzar con al menos tres (3) caracteres indicando el nombre
del usuario,
b. Debe contener el caracter “@” para separar nombre de usuario del
dominio,
c. El texto del dominio debe tener al menos tres (3) caracteres
inicialmente, luego un punto “.” y dos caracteres al menos para
determinar el final del dominio,
d. Considerar que no puede finalizar en punto y que podría haber más de
un punto para un dominio más largo, por ejemplo: fceqyn.unam.edu.ar*/

function verificarCorreo(cadena) {
	let indice = 0;
	let arroba = false;
	let usuario = false;
	let dominio = "";
	let puntoDominio = false;
	let inicioDominio = false;
	let primerPunto = false;

	while(indice < cadena.length){
		if (cadena[indice] == "@") {
			arroba = true;
			if (indice > 2){
				usuario = true;
			}
		}
		
		if(usuario == true && indice + 1 < cadena.length){
			dominio += cadena[indice + 1];
		}

		indice++;
	}
	
	if (arroba == false) {
		return "Te olvidaste del arroba (@)";
	}
	if (usuario == false) {
		return "El ususario debe tener al menos 3 caracteres";
	}

	indice = 0;
	while(indice < dominio.length){
		if (dominio[indice] == "." && primerPunto == false) {
			primerPunto = true;
			puntoDominio = true;
			if (indice > 2){
				inicioDominio = true;
			}
		}

		indice++;
	}

	if (puntoDominio == false){
		return "Dominio no válido";
	}
	if (inicioDominio == false ) {
		return "Dominio no válido";
	}

	if (dominio[dominio.length - 1] == ".") {
		return "El dominio no puede finalizar con punto (.)";
	}

	if (dominio[dominio.length - 1] == "." || dominio[dominio.length - 2] == ".") {
		return "El final de dominio debe tener al menos dos carateres";
	}
	return "Válido";
}

verificarCorreo("anibal@fceqyn.unam.edu.ar");