function convertirMB(valor, tipo) {
	if (tipo == "Mb") { return valor * 8}
	if (tipo == "KB") { return valor * 1000}
	if (tipo == "Kb") { return valor * 8000}
	if (tipo == "B") { return valor * 1000000}
	if (tipo == "b") { return valor * 8000000}
}

console.log(convertirMB(30, "Mb"));
console.log(convertirMB(30, "KB"));
console.log(convertirMB(30, "Kb"));
console.log(convertirMB(30, "B"));
console.log(convertirMB(30, "b"));