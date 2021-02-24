/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var respuesta;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");  
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado >= numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroIngresado <= numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		else if(numeroIngresado < numeroMaximo && numeroIngresado > numeroMinimo)
		{
			numeroIngresado = numeroIngresado;
		}
		else
		{
			numeroMaximo = numeroIngresado; 
			numeroMinimo = numeroIngresado; 
		}

		

		respuesta = prompt("desea continuar? SI o NO");
	}

	txtIdMaximo.value = numeroMaximo; 
	txtIdMinimo.value = numeroMinimo; 
}//FIN DE LA FUNCIÓN