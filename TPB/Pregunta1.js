/*Un docente tiene las notas de 3 exámenes de sus alumnos 
y desea obtener un promedio y calificar a sus alumnos.

Para esto se deberá generar una función “calificar” que en 
función del promedio obtenido devuelva una calificación según 
el siguiente esquema:

1 a 3: ​ Insuficiente

4 a 5: ​ Regular

6 a 7: ​ Bueno

8 a 9: ​ Muy Bueno

10: ​ Excelente

Solo se van a usar como parámetros números enteros entre 1 y 10.*/

function calificar (nota, nota2, nota3) {
    let promedio = 0.0;

	promedio = (nota + nota2 + nota3) / 3;

	if (promedio > 0 && promedio < 4){
		return "Insuficiente";
	}
		if (promedio > 3 && promedio < 6){
		return "Regular";
	}
		if (promedio > 5 && promedio < 8){
		return "Bueno";
	}
		if (promedio > 7 && promedio < 10){
		return "Muy Bueno";
	}
		if (promedio == 10){
		return "Excelente";
	}
}