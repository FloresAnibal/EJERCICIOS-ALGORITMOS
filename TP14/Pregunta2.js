/*Sobre lo desarrollado para el ejercicio anterior (Punto 8) incorporar métodos que 
permitan obtener los nombres de los pacientes que tienen una deuda mayor al promedio 
general de deuda del consultorio.
Los resultados a devolver por el método denominado informe(), deberán estar representados 
a través de un vector (array).*/

function informe(nombres, deudas){
    let promedioGral = 0.0;
    let pacientes = [];

    for (var i = 0; i < deudas.length; i++) {
    	promedioGral += deudas[i];
    }

    promedioGral /= deudas.length;

    for (var j = 0; j < deudas.length; j++) {
    	if (deudas[j] > promedioGral){
    		pacientes.push(nombres[j]);
    	}
    }

    return pacientes;
}

let nombres = ["Carlos María", "Jessica Yolanda", "Mario Raul", "Dahiana Pamela"];
let deudas = [3.600, 21.543, 10.569,8.145];
console.log(informe(nombres, deudas));