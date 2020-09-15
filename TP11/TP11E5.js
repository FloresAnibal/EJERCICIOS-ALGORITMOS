/*Hacer una función que reciba un string o cadena de caracteres 
terminada en "#". Devolver la cantidad de palabras que cumplen todas 
las siguientes condiciones:
a. Comienzan con “a”,
b. Terminan con “s” y
c. Tienen 5 caracteres de longitud.*/

function contarPalabras(cadena) {
	let cantPalabras = 0;
	let palabra = "";
	let indice = 0;
	let bandera = false;

 
	while(cadena[indice] != "#"){
		if(cadena[indice] != " ") {
			palabra+=cadena[indice];
			indice++;
			bandera = true;
		}
		else if(bandera == true){
			
			if (palabra.length == 5){
				if (palabra[0] == "a" || palabra[0] == "A"){
					if (palabra[palabra.length - 1] == "s" || palabra[palabra.length - 1] == "S"){
						cantPalabras++;
					}
				}
			}
				
			palabra = "";
			indice++;
			bandera = false;}
		else{
			indice++;}
	}
    if(bandera == true){
    	if (palabra.length == 5){
				if (palabra[0] == "a" || palabra[0] == "A"){
					if (palabra[palabra.length - 1] == "s" || palabra[palabra.length - 1] == "S"){
						cantPalabras++;
					}
				}
			}
		}
		
	return cantPalabras;
}

console.log(contarPalabras("Adivina#"));