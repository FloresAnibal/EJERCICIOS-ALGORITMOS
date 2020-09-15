/* VALOR EN PESOS ARGENTINOS:
1 Dolar = 72,80
1 Euro = 86,26 
1 Real = 13,42  */

function convertirARS(monto, moneda) {
	if (moneda == "USD"){
		return monto / 72.80;
	}

	if (moneda == "EUR"){
		return monto / 86.26;
	}

	if (moneda == "BRL"){
		return monto / 13.42;
	}
}

console.log(convertirARS(15, "USD"));
console.log(convertirARS(15, "EUR"));
console.log(convertirARS(15, "BRL"));
