function dividirNumeroPor2(numero) {
	
	let cont = 0;

	while(numero > 1){
		cont++;
		numero/=2;
	}
	return cont;
}

console.log(dividirNumeroPor2(8));