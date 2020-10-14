/*Suponer que te encuentras como personal de las elecciones presidenciales para la                        
campaña de Tito Florentino con el frente ChoriParaTodos, y cada mesa lleva un                          
registro de las personas que votan allí, para poder automatizar este proceso de                          
búsqueda, cuentan con una lista de votantes en un vector con los nombres. Nuestro                            
trabajo es realizar una función dentro de un script que pueda buscar un nombre                            
dentro de la colección y decir si se encuentra registrado para votar en esa mesa o                                
no. */

function buscarVotante(nombre, lista) {	

	if (lista.includes(nombre)) {
		console.log("Existe");
	}else{
		console.log("No Existe");
	}
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let votantes = ["CARMEN", "MARIA", "ANA", "JOSEFA", "ISABEL", "PILAR", "DOLORES", 
"LAURA", "TERESA", "ANTONIO", "MANUEL", "JOSE", "FRANCISCO", "DAVID", "JUAN", 
"JAVIER", "DANIEL", "LUIS"];

buscarVotante("CARMEN", votantes);

//NOTA II: el código no controla mayúsculas o minúsculas...