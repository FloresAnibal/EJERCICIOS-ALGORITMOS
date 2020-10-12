/*Tiffany, la vecina del barrio, sabe que eres informático y te pidió 
colaboración para desarrollar un script que le permita ordenar un vector 
con el registro delm monto de ventas de su actividad comercial durante el 
mes de Febrero y lo imprima de manera descendente. */

function burbuja(arreglo){
    let aux = 0;
    //recorreremos todos los elementos hasta n-1
    for(i=0;i<(arreglo.length-1);i++){
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        for(j=0;j<(arreglo.length-i);j++){
     
            //comparamos
            if(arreglo[j]>arreglo[j+1]){
                 //guardamos el numero mayor en el auxiliar
                 aux=arreglo[j];
                 //guardamos el numero menor en el lugar correspondiente
                 arreglo[j]=arreglo[j+1];
                 //asignamos el auxiliar en el lugar correspondiente
                 arreglo[j+1]=aux;
     
            }     
        }
    }
 
    return arreglo
}

//array con 28 valores
let registros = [4043.2, 4479.95, 1783.01, 3253.53, 4418.82,  523.41, 2566.22, 3626.84,
  				2295.72, 3202.09, 3000.06, 4854.63, 2709.49, 1776.35, 2890.69, 2422.25,
  				3597.35, 2556.29,  2903.8, 1016.08,  444.19, 3577.74,  586.43, 4709.23,
  				3791.43,  283.94, 1011.22, 961.16];

function ordenar(argument) {
	let ordenados = [];	//array donde alamaceno los nombres ya ordenados
	
	ordenados = burbuja(argument);	//ordeno usando la función burbuja
	ordenados = ordenados.reverse();	//invierto el orden del array

	return ordenados;	//devuelvo el array ordenado
}

//NOTA: lo siguiente es solo para pruebas. No va en el moodle
console.log(ordenar(registros));	//llamo a mi función y le paso el array con los valores

/*NOTA II: para este ejercicio uso burbuja y no sort porque mi variable contiene números
		   y sort, tal cual, no los ordena como espero*/