function multiplicarNumeroN(numero,cantidad) {
	for (var i = 0; i < cantidad; i++) {
		numero*=numero;	
	}

	return numero;
}

console.log(multiplicarNumeroN(2,5));