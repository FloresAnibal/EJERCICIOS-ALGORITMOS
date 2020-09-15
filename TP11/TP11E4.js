/*NOTA DEL PROFESOR: Para este ejercicio, simplemente nos remitiremos 
a la siguientedefinición "grupo de dos vocales distintas y contiguas 
que se pronuncian en una sola sílaba" - por lo tanto, basta con que 
aparezcan dos vocales consecuitivas en una silaba para considerarse 
un DIPTONGO, lo que queremos decir es que, no entraremos en análisis 
gramaticales complejos, subclasificaciones, consideraciones sobre 
tildes, entre otros aspectos relacionados.*/

/*Hacer una función que dado un string o cadena de caracteres,
terminada en punto, determine la cantidad de diptongos que aparecen.*/

function encontrarDiptongo(cadena) {
	let vocales = "aAeEiIoOuU";
	let vocal1 = false;
	let i = 0;
	let indice = 0;
	let diptongo = 0;
	while (i < cadena.length) {
		indice =0;
		while(indice < vocales.length){
			if (cadena[i] == vocales[indice]){
				vocal1 = true;
			}
			indice ++;
		}
		if (vocal1 == true) {
			indice =0;
			while(indice < vocales.length){
				if (cadena[i - 1] == vocales[indice]){
					diptongo ++;
				}
				indice ++;
			}
			vocal1 = false;
		}
		i++;
	}
	return diptongo;
}

console.log(encontrarDiptongo("Anibal"));