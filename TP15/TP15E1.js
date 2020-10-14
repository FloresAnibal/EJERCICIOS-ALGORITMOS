/*Estamos esperando en la cola de ingreso a un cajero del Banco Billetitos con                            
Alas, y se nos ocurre idear una forma de cargar 10 valores en un vector y que luego                                    
los imprima en el orden en que se cargaron al mismo tiempo que vacía este array.                                
Hacer una función que resuelva esto suponiendo que cada elemento representa al                        
número de cliente del banco en cuestión.*/

function cargar_y_mostrar() {	//no recibe parámetros
	let numeros = [];	//array donde guardo los valores que se van a ingresar

	for (var i = 0; i < 10; i++) {
		numeros.push(prompt("Cargar número..."));	//guardo los valores que se teclean. Con Push se agregan al final
	}

	for (var j = 0; j < 10; j++) {
		console.log(numeros.shift());	//muestro los valores en el orden ingresado. Shift los elimina de izq. a der.
	}

}

cargar_y_mostrar();