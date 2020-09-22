/*Math.random devuelve un número aleatorio mayor que cero y menor que uno. Ej: 0.5, 0.12, 0,7, 0.99
  Math.floor() redondea al entero inferior. Ej: 4.65 a 4
  Combinando ambos con algo de matemática se consigue numeros aleatoreos pudiendo definir un rango*/

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

for (var i = 0; i < 10; i++) {
	console.log(random(1, 10));
}