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