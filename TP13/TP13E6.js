let notas = [];	//definida fuera de todo para que sea de ambito glogal y pueda ser usada dentro y fuera de las funciones

function ingresarDatos() {
	
	for (var i = 0; i < 15; i++) {
		notas.push(parseInt(prompt("Ingresar nota...")));	//PARSEINT dentro del PUSH y antes del PROMPT para que el valor ingresado										
	}														//se tomado como número y no como caracter	

}//sin RETURN porque el vector "notas" es modificado estando fuera de la función

function procesarNotas(arrayNotas) {
	let promedio = 0.0;
	let notaBaja = 11;	//inicia con un valor mayor al que se podría obtener. Podría ser 10 también
	let notaAlta = -1; 	//podría ser 0 ya que 0 no es una nota que se pueda obtener. Pero nunca se sabe jajaja
	let aprobados = 0;
	let desaprobados = 0;

	for (var i = 0; i < 15; i++) {
		//en cada posición del vecor analizo el valor contenido para cada consigna por separado
		if (arrayNotas[i] < notaBaja) {
			notaBaja = arrayNotas[i];	//comparo y guardo la nota mas baja
		}

		if (arrayNotas[i] > notaAlta) {
			notaAlta = arrayNotas[i];	//comparo y guardo la nota mas alta
		}

		if (arrayNotas[i] >= 6) {
			aprobados++;
		}else{	//si no se cumple lo anterior significa que no aprueba y no necesito preguntar nuevamente
			desaprobados++;
		}
		
		promedio += arrayNotas[i];	//sumo cada valor del vector
	}
	  
	console.log("Promedio: " + promedio/15); //divido y muestro el promedio
	console.log("Nota mas baja: " + notaBaja);
	console.log("Nota mas alta: " + notaAlta);
	console.log('Aprobados: ' + aprobados);
	console.log("Desaprobados: " + desaprobados);
}

ingresarDatos();	//llamo a la función para comenzar la carga

procesarNotas(notas);	//llamo a la funnción (y le paso el vector ya cargado) que me devolverá loso valores
						//que pide la consigna