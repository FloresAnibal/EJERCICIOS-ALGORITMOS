/*Hacer una función “calcularCosto” que debe realizar 
el cálculo del valor a cobrar a un cliente de una 
estación de servicio a partir de la cantidad de litros 
suministrada y el precio por litro del combustible seleccionado.

Una vez realizado este cálculo para fines administrativos, 
se requiere liquidar sobre el importe total de la venta los 
impuestos (IVA 21% e Ingresos Brutos 3.5%).

El programa debe tomar el precio por litro, la cantidad de 
litros e informar el valor a cobrar al cliente incluyendo 
impuestos.*/

function calcularCosto(litros, precio) {
    let costo = 0.0;
	costo = precio * litros;
	costo = costo + (costo * 0.245);
	return costo; 
}

/*NOTA: el codigo funciona pero redondea decimales 
que el sistema no y eso lo toma como error. REVISAR*/