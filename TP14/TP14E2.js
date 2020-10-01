/*La enfermera del CAPS del barrio Hormiguitas solicitó un script que permita                        
calcular el valor promedio del peso de los recién nacidos registrados durante                        
el segundo trimestre del año. Para eso se deberá procesar una colección de                          
los pesos de todos los recién nacidos en ese periodo.*/

//NOTA: trabajo con valores decimales

//*********************SOLO PARA PRUEBAS****************************
function random(min, max) {	//genera números aleatoreos
    return ((Math.random() * (max - min + 1)) + min).toFixed(1);
}

let registro = [];	//variable donde voy a cargar los datos

for (var i = 0; i < 91; i++) {	//se encarga de llenar la variable con 91 valores aleatoreos
	registro.push(random(1, 5));	//los valores serán entre decimales entre 1 y 5.9
}
//******************************************************************

function promedio(argument) {
	let media = 0.0;	//variable donde sumo, guardo y luego promedio el total

	for (var i = 0; i < argument.length; i++) {	//recorre todo el array
		media += parseFloat(argument[i]);	//sumo y guardo los valores de cada posicion
  	}

	media /= argument.length; //con el total sumado divido por la cantidad de elementos y guardo el resultado

	return media.toFixed(1);	//devuelvo el promedio.toFixed(1) se asegura de que haya solo un decimal
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
console.log(promedio(registro));