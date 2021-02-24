/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	
	sumaPositivos=0;
	multiplicacionNegativos=-1;
	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = prompt("Desea continuar? si o no");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value= multiplicacionNegativos;

}//FIN DE LA FUNCIÓN