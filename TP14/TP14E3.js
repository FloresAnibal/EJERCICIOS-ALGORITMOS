/*El subgerente de una regional de la cadena de minimercados El Goloso                        
S.R.L. solicitó un script que permita informar el día de menor y mayor ventas                            
registradas durante el mes de Octubre. Determinar en qué tipo de estructura                        
se deben almacenar tales datos.*/

function menor(argument) {
	let menor = argument[0];	//inicio mi variable con el primer valor del array para luego comparar
	let dia = 1;	//inicio mi variable con el dia correspondiente al primer valor que usé arriba

	for (var i = 1; i < argument.length; i++) {	//recorre todo el array. Mi indice inicia en 1 porque la posicion 0 la usé arriba
		if(argument[i] < menor){	//pregunto si el valor del array es menor a lo que contiene "menor"
			menor = argument[i];	//de ser afiramtiva la condición del If reemplazo el valor de "menor" 
			dia = i + 1;	//guardo la posicion mas uno que equivale al día
		}
	}
	return dia;	//retorno el día
}

function mayor(argument) {	//iden a la función menor pero buscando el mayor
	let mayor = argument[0];
	let dia = 1;

	for (var i = 1; i < argument.length; i++) {
		if(argument[i] > mayor){
			mayor = argument[i];
			dia = i + 1;
		}
	}
	return dia;
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let octubre = [146, 284, 82, 169, 263, 57, 89, 215, 138, 64, 215, 138, 152, 155, 116, 176, 286, 112, 200, 132, 298, 73, 194, 275, 198, 137, 182, 286, 127, 121, 230];
console.log(menor(octubre));
console.log(mayor(octubre));