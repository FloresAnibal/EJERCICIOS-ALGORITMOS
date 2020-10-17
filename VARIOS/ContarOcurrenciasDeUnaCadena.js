//Busca si existe una cadena dentro de un string y de ser así cuanta cuántas veces aparece

function contarOcurrencias(oracion, buscar) {	//recibe la frase, palabra, oración o cadena, más lo que se desea contar
	let ocurrencias = 0;	//para contar...
	let desde = 0;	//para guardar la posición de dónde debe comenzar a buscar
	
	oracion = oracion.toUpperCase();	//convierto a myúsculas. Se podría omitir según el ejercicio
	buscar = buscar.toUpperCase();	//convierto a mayúsculas. Se podría omitir según el ejercicio

	if(oracion.includes(buscar)){	//veo si lo que busco existe dentro del string
		desde = oracion.indexOf(buscar);	//guardo la posición donde se encuentra la primer ocurrencia

	    while(desde != -1){	//"desde" valdrá -1 cuando indexOf ya no encuentre ocurrencias
			ocurrencias++;	//ya sé que al menos una vez aparece lo que busco y lo agrego al contador
			//vuelvo a guardar el valor de la posición. Si existe sigue contando sino no vuelve a entrar al while por el valor -1
			desde = oracion.indexOf(buscar, desde+1);	//busca desde la posición anterior +1 para que avance 
		}
	}
	return ocurrencias;	//devuelvo la cantidad de veces...
}

let frase = "Si tú me domesticas, entonces tendremos necesidad el uno del otro. Tú serás para mí único en el mundo, yo seré para ti único en el mundo...";
let palabra = "en";

console.log(contarOcurrencias(frase, palabra));
