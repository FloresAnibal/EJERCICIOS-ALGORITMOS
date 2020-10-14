/* Nos encontramos trabajando en el área de sistema de una reconocida empresa de                          
difusión llamada Fashion Wave Start, y el project manager del equipo requiere que                          
adaptemos las direcciones de las páginas que tenemos publicadas ya que la nueva                          
versión del estándar no admite espacios en blanco. Para ello debemos realizar un                          
script que reciba un array de palabras (las que corresponden al título del artículo)
y retorne una única cadena de caracteres compuesta por los elementos del array                        
separadas por guiones (-).*/

function guiones (argument) {
	let nuevaFrase = "";	//donde guardo las palabras y guiones

	for (var i = 0; i < argument.length; i++) {	//recorro el array
		nuevaFrase += argument[i];	//guardo el contenido de esa posición
		if(argument.length > i + 1){	//controlo que no sea la última posición
			nuevaFrase += "-";	//concateno un guion para la siguinete palabra
		}
	}
	return nuevaFrase.trim();	//devuelvo y Trim me quita los espacios de los extremos si los hubiera
}


//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let titulo = ["Fashion", "Wave", "Start"];

console.log(guiones(titulo));