/*Hacer un script que reciba un párrafo, con oraciones separadas por puntos. 
Separar las oraciones y retornarlas, creando un párrafo, con las oraciones 
invertidas.*/

function invertir(argument) {
	let invertido = [];
	let oracion = "";
	
	while (i < argument.length) {    //recorre toda la cadena
        while(argument[i]!= '.'){ //mientras el caracter en esa posición no sea un punto
            oracion += argument[i];   //guardo el caracter para ir formando la oración
            i++;    //aumento el índice para pasar al siguiente caracter
        }
        invertido.unshift(oracion)
        i++;
    }
    return invertido;
}

let parrafo = "Persiana americana. Corazón delator. Crimen.";

console.log(invertir(parrafo));