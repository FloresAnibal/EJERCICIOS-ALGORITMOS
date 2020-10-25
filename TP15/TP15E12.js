/*Hacer un script que reciba un párrafo, con oraciones separadas por puntos. 
Separar las oraciones y retornarlas, creando un párrafo, con las oraciones 
invertidas.*/

function invertir(argument) {
	let invertido = [];	//para ir acomodando las oraciones de forma tal que queden en orden invertido
	let oracion = "";	//donde voy cargando cada oración
	let i = 0;	//índice para el While
	
	while (i < argument.length) {    //recorre toda la cadena
        while(argument[i]!= '.'){ //mientras el caracter en esa posición no sea un punto...
            oracion += argument[i];   //...guardo el caracter para ir formando la oración
            i++;    //aumento el índice para pasar al siguiente caracter
        }
        
        invertido.unshift(oracion.trim());	//unshift() hace que cada oración que agrego se acomode en primer lugar
        oracion = "";	//vacío la variable para la siguiente oración
        i++;	//aumento el índice
    }

    for (var j = 0; j < invertido.length; j++) {	//para convertir el array con oraciones en una sola cadena de texto
    	oracion += invertido[j] + ". ";	//reutilizo la variable para pasar cada oración y le concateno punto y espacio
    }
    
    return oracion.trim();	//devuelvo la cadena invertida quitando los espacios que pudiera tener
}

let parrafo = "Persiana americana. Corazón delator. Crimen.";

console.log(invertir(parrafo));
