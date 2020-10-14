/*Realizar un script que reciba una frase y la convierta a un vector, devolviéndolo a                              
través de una función. Se tienen que tomar en cuenta los espacios en blanco, donde                              
cada palabra de la frase original se convertirá en un elemento en una posición del                              
nuevo vector resultante.*/

function convertir(frase) {
	let vector = [];	//donde voy a guardar las palabras
	let palabra = "";	//donde voy colocar las palabras para guradarlas

	for (var i = 0; i < frase.length; i++) {	//recorro el array
		if (frase[i] != " ") {	//verifico que el caracter NO sea un espacio
			
			palabra += frase[i];	//guardo el caracter para ir formando la palabra
			
		}else{	//ELSE se ejecuta si el caracter analizado es un espacio
			
			if(palabra.length > 0){	//controlo que la variable no vena vacía
				
				vector.push(palabra);	//coloco en el vector la palabra extraída
				palabra = "";	//vacío la variable para cargar una nueva palabra
			}
		}	
	}
	//esta línea se repite para cargar la última palabra que no es guardad por el código de arriba
	vector.push(palabra);	//coloco en el vector la palabra extraída
	
	return vector;	//devuelvo el vector
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let texto = "En algún lugar de un libro hay una frase esperándonos para darle un sentido a la existencia";

console.log(convertir(texto));
