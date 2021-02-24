/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var contador = 10;

	while(contador <0 || contador > 9)
	{
		numeroIngresado = prompt("Ingrese un numero entre 0 y 9");
		numeroIngresado = parseInt(numeroIngresado);
		contador = numeroIngresado;
	}

	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN