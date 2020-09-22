//NOTA: suponiendo que no recibo números negativos...

let vector = [];

function multiplo3(vec) {

	for (var i = 0; i < 20; i++) {
		vec.push(prompt("Ingresar valor..."));	//ingreso de datos del lado del usuario
	}

	for (var i = 0; i < 20; i++) {
		if (vec[i] == 0 || vec[i] == 1) {	//0 y 1 son múltiplos pero difícil de calcular con MOD (%)	
			console.log("Posicion " + i + " - valor: " + vec[i]);
		}else{
			if (vec[i] % 3 == 0) {
				console.log("Posicion " + i + " - valor: " + vec[i]);
			}
		}
	}
	//la función no usa RETURN porque no quiero que finalice la ejecución hasta recorrer todo el vector
}

multiplo3(vector);	//llamo a la función pasándole el vector vacío