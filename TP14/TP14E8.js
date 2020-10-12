/* En un vector están almacenados los nombres de los pacientes de una clínica                          
dental, y en otro vector, paralelo al anterior, la cantidad que ese cliente                          
adeuda o un cero (0) si sus pagos están al día. Escribir un script que genere                                
2 listados, uno con los clientes que tienen deudas pendientes y el otro, con                            
los clientes al corriente de pago.*/

let pacientes = ["Carlos María", "Jessica Yolanda", "Mario Raul", "Dahiana Pamela", "Cecilia Jáuregui", "Carlos Osorio"];
let deudas = [3.600, 21.543, 10.569, 8.145, 0, 2.560];

console.log("-----DEUDORES-----")
for (var i = 0; i < deudas.length; i++) {
	if(deudas[i] > 0){
		console.log(pacientes [i] + " - " + deudas[i].toFixed(3));
	}
}

console.log("-----AL DIA-----")
for (var j = 0; j < deudas.length; j++) {
	if(deudas[j] == 0){
		console.log(pacientes [j]);
	}
}

/*NOTA: el código no está pensado para se subido al moodle. De ser neesario 
		habrá que modificarlo*/