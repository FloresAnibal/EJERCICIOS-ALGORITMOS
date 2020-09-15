/*Hacer una función “convertirMB” que reciba un valor en 
Megabytes(MB) y devuelva el valor convertido a la unidad 
según el parámetro ingresado: 

Megabit(Mb),
Kilobyte(KB),
Kilobit(Kb),
Byte(B)
Bit(b).*/

function convertirMB(valor, tipo) {
	if (tipo == "Mb") { return valor * 8}
	if (tipo == "KB") { return valor * 1000}
	if (tipo == "Kb") { return valor * 8000}
	if (tipo == "B") { return valor * 1000000}
	if (tipo == "b") { return valor * 8000000}
}

/*NOTA: el código respondio de forma correcta las consignas del sistema
	  pero el sistema me da como parcialmente correcta. REVISAR*/	