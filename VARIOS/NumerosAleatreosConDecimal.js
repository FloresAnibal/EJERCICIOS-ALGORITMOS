function random(min, max) {	//genera números aleatoreos
    return ((Math.random() * (max - min + 1)) + min).toFixed(1);	//toFixed controla la cantidad de decimales que quiero
}

let registro = [];	//variable donde voy a cargar los datos

for (var i = 0; i < 91; i++) {	//se encarga de llenar la variable con 91 valores aleatoreos
	registro.push(parseFloat(random(1, 5)));	//los valores serán entre decimales entre 1 y 5.9
}												//parseFloat se asegura de que se guarde como número y no cmo string
