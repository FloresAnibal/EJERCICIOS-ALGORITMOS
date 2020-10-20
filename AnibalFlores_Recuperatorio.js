/*Realizar una función, llamada parcial, que reciba como parámetro una 
cadena de caracteres que representa un párrafo separado en oraciones 
delimitadas por un punto (“.”). Además se reciben otras dos variables 
de tipo string que contienen una palabra cada una (A y B). La función 
deberá modificar la cadena original reemplazando todas las ocurrencias 
de la palabra A con la palabra B y deberá devolver el promedio de cambios 
realizados por oración.

El código no deberá hacer diferencia entre mayúsculas y minúsculas.

Inclusive la última oración finaliza en un punto.*/

function parcial(frase, a, b) {
	let palabra = "";
	let indice = 0;
	let oracion = "";
	let veces = 0;
	let buscar = "";
	let reemplazar = "";
	let promedio = 0.0;
	let cantOracion = 0;
	
	a = a.toUpperCase();
	buscar = " "+a+" ";
	
	b = b.toUpperCase();
	reemplazar = " "+b+" ";
 
	while(indice < frase.length){
		while(frase[indice] != "."){
			oracion+= frase[indice];
			indice++;			
		}
		cantOracion++;
		oracion = oracion.toUpperCase();
	

		//****************************************
		while (oracion.includes(buscar)) {
			oracion = oracion.replace(buscar,reemplazar);
			veces++;
		
		}
		promedio+=veces;
		veces = 0;
		
		//********************************************
		oracion = "";
		indice++;    
	}	
	promedio = (promedio/cantOracion).toFixed
	return promedio/cantOracion;
}

//NOTA: no devuelvo decimales

console.log(parcial("Recuperatorio de string. Miércoles catorce de octubre de 2020. Un ejercicio y muchas respuestas.", "de", "reemplazo"));


