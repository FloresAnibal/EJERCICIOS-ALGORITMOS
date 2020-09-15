function calcularCosto(litros, precio) {
	let costo = 0.0;
	costo = precio * litros;
	costo = costo + (costo * 0.245);
	return costo; 
}

console.log(calcularCosto(10, 69.9));
console.log(calcularCosto(200, 60.089));