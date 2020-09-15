function calificar(nota, nota2, nota3) {
	let promedio = 0.0;

	promedio = (nota + nota2 + nota3) / 3;

	if (promedio > 0 && promedio < 4){
		return "Insuficiente";
	}
		if (promedio > 3 && promedio < 6){
		return "Regular";
	}
		if (promedio > 5 && promedio < 8){
		return "Bueno";
	}
		if (promedio > 7 && promedio < 10){
		return "Muy Bueno";
	}
		if (promedio == 10){
		return "Excelente";
	}
}

console.log(calificar(1,1,1));
console.log(calificar(4,2,9));
console.log(calificar(8,8,2));
console.log(calificar(6,10,10));
console.log(calificar(10,10,10));