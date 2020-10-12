/*.Realizar un algoritmo que lea dos vectores A y B de dimensión 100 y realice:  
● Una función que retorne un tercer vector C (también de dimensión                      
100), donde cada elemento se define como C[i] = max { A[i], B[i] }.                            
Imprimir los 3 vectores. 
● Una función que retorne un tercer vector C, también de 100                      
componentes, donde cada C[i] es el componente del vector A que se                        
encuentra en la posición que indica B[i] (no es necesario hacer un                        
validación de índices). Imprimir  los 3 vectores. */

function random(min, max) {	//genera números aleatoreos. Ya comentado en GitHub
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let vectorA = [];	
let vectorB = [];

for (var i = 0; i < 100; i++) { //cargo ambos vectores
	vectorA[i] = random(1, 99);
	vectorB[i] = random(1, 99);
}

//**********************************************************************
function max(a, b) {
	let c = [];	//declaro el vector C

	for (var i = 0; i < a.length; i++) {	//podría usar 100 en lugar de a.length
		if(a[i] > b[i]){	//comparo si A es mayor a B
			c[i] = a[i];	//guardo en C si A es mayor
		}else{
			c[i] = b[i];	//guardo en C si B es mayor
		}
	}
	return c;	//devuelvo C
}

function posicionB(a, b) {
	let c = [];	//declaro el vector C

	for (var i = 0; i < a.length; i++) {	//podría usar 100 en lugar de a.length
		c[i] = a[b[i]];	//C toma el valor de A en la posición que indique B
	}
	return c;	//devuelvo C
}
//**************************************************************************

function imprimir(a, b, c) {	//recibe los tres vectores y los muestra en pantalla 
								//con cierto formateo para mayor prolijidad
	console.log('\tA\tB\tC');	//"\t" inserta una tabulación
	for (var j = 0; j < a.length; j++) {	//podría usar 100 en lugar de a.length
		console.log("\t" + a[j] + "\t" + b[j] + "\t" + c[j]);
	}
}

//declaro y asigno llamando a la función correspondiente
let vectorCmax = max(vectorA, vectorB);	//vector para la primer consigna
let vectorCpos = posicionB(vectorA, vectorB);	//vector para la segunda consigna

console.log('Primera parte del ejercicio\n');	//"\n" genera un salto de línea
imprimir(vectorA, vectorB, vectorCmax);

console.log('\nSegunda parte del ejercicio\n');
imprimir(vectorA, vectorB, vectorCpos);

/*NOTA: solo lo encerrado en asteriscos es para el ejercicio en sí. Lo demás
		es para prueba y se podría prescindir de eso*/