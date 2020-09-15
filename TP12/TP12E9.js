/*Hacer una función que permita completar una frase de dichos populares,
como por ejemplo “Quien madruga, Dios lo ayuda”. La función deberá recibir
dos parámetros, el primero es una parte de la frase, en el ejemplo es “Quien
madruga, ”, el segundo parámetro es un valor que ingresa el usuario para
completar la frase, en el caso concreto del ejemplo, sería “Dios lo ayuda”.
La función deberá retornar verdadero si la concatenación de ambos
parámetros es igual a la frase escogida.*/

let frase = "Quien madruga, Dios lo ayuda";
let valorCorte = 15;
let frase2 = "";

function completar(argument, argument2) {
	let completo = argument + argument2;

	return frase.includes(completo);
}

frase2 = prompt(frase.slice(0, valorCorte));
completar(frase.slice(0, valorCorte), frase2);