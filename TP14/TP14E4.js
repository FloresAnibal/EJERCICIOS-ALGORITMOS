/*La profesora de la asignatura de Introducción a Informática pidió la                      
colaboración de los alumnos, para escribir un script de ordenamiento, que                      
permita tomar un vector con los nombres de los alumnos y los imprima por                            
pantalla en forma ascendente.*/

//array con nombres sin un orden específico...
let nombres = ["CARMEN", "MARIA", "ANA", "JOSEFA", "ISABEL", "PILAR", "DOLORES", "LAURA", "TERESA", "ANTONIO", "MANUEL", "JOSE", "FRANCISCO", "DAVID", "JUAN", "JAVIER", "DANIEL", "LUIS"];

function ordenar(argument) {
	let ordenados = [];	//array donde alamaceno los nombres ya ordenados
	//podría convertir todo a mayúsculas o minúsculas de ser necesario
	ordenados = argument.sort();	//ejecuto la instrucción de ordenamiento
	return ordenados;	//devuelvo el array ordenado
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
console.log(ordenar(nombres));	//llamo a mi función y le paso el array con los nombres