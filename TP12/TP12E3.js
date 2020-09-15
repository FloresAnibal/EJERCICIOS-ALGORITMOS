/*Teniendo en cuenta el siguiente string: 'La casa es de color Blanco', hacer un
una función que modifique el color en el texto según los siguientes códigos: 1
= “Verde”, 2 = “Rojo”, 3 = “Amarillo” que se reciben como parámetro.*/

function reemplazar(oracion, reemplazo) {
	
	if (reemplazo == 1) {
		return oracion.replace("Blanco", "Verde");
	}
	if (reemplazo == 2) {
		return oracion.replace("Blanco", "Rojo");
	}
	if (reemplazo == 3) {
		return oracion.replace("Blanco", "Amarillo");
	}
	
}

let frase = "La casa es de color Blanco";

console.log(reemplazar(frase, 1));
console.log(reemplazar(frase, 2));
console.log(reemplazar(frase, 3));
console.log(frase);
