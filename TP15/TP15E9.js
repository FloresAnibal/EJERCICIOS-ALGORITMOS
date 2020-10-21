/*Hacer una función que reciba dos vectores y un valor booleano, si el 
booleano es verdadero, retornar el primer array concatenado al segundo. 
Si es falso, concatenar el segundo al primero.*/

function concatenar(vec1, vec2, boolean) {
	let fusion = [];	//para guardar la concatenación
	
	if(boolean){	//SI boolean es True
		fusion = vec1.concat(vec2);	//concateno el primero con el segundo
	}else{
		fusion = vec2.concat(vec1);	//concateno el segundo con el primero
	}
	return fusion;	//devuelvo el nuevo array con la unión de los dos recibidos
}

let vector = [1, 2, 3, 4, 5];
let vector2 = ["uno", "dos", "tres", "cuatro", "cinco"];
let booleano = true;

console.log(concatenar(vector, vector2, booleano));