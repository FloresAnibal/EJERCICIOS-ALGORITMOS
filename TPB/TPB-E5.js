function dividirNumeroPorN(dividendo, divisor) {
	
	let cont = 0;

	while(dividendo > 1){
		cont++;
		numero/=divisor;
	}
	return cont;
}

console.log(dividirNumeroPorN(8,3));