/*Hacer una función parcial que, dada una cadena de caracteres que se pasa como parámetro, 
devuelva una nueva cadena en donde no se encuentren palabras que contengan una letra “x”. 
No se deben discriminar mayúsculas ni minúsculas.*/

function parcial(argument) {
	
	let nuevaPalabra = "";
	let palabra = "";
	let indice = 0;
	
	while(indice < argument.length){

		if(argument[indice] != " "){
			palabra += argument[indice];
			indice ++;
		}else{
			if (palabra.length > 0) {
				if (!(palabra.includes("x")) && !(palabra.includes("X"))){
				nuevaPalabra += palabra + " ";}
			}
		
			palabra = "";
			indice++;
		}
	}

	if (!(palabra.includes("x")) && !(palabra.includes("X"))){
		nuevaPalabra += palabra + " ";
	}

	return nuevaPalabra.trim();

}

let txt = 'Esto es un texto descriptivo para un ejemplo xq es necesario';
console.log(`Ejemplo: ${parcial(txt)}`);


