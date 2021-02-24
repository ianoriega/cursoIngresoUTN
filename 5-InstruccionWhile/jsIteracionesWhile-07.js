/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++
		respuesta = prompt("Desea continuar? escriba si o no");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;
}//FIN DE LA FUNCIÓN