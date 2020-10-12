/*Sobre lo desarrollado para el ejercicio anterior (Punto 8) incorporar métodos que 
permitan obtener los nombres de los pacientes que tienen una deuda mayor al promedio 
general de deuda del consultorio.*/


function informe(nombres, deudas){
    let promedioGral = 0.0; //donde voy a guardar mi promedio
    let pacientes = []; //donde voy a almacenar los nombres de los deudores

    for (var i = 0; i < deudas.length; i++) {
    	promedioGral += deudas[i]; //sumo y guardo los montos
    }

    promedioGral /= deudas.length;  //divido para obtener el promedio

    for (var j = 0; j < deudas.length; j++) {
    	if (deudas[j] > promedioGral){ //comparo para ver si la deuda es mayor al promedio de éstas
    		pacientes.push(nombres[j]);   //guardo los nombres de quienes adeuden mas que el promedio
    	}
    }

        return pacientes;   //devuelvo el array con los nombres
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
let nombres = ["Carlos María", "Jessica Yolanda", "Mario Raul", "Dahiana Pamela", "Cecilia Jáuregui", "Carlos Osorio"];
let deudas = [3.600, 21.543, 10.569, 8.145, 0, 2.560];

console.log(informe(nombres, deudas));