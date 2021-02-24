/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:

1-Suma de los negativos. ok
2-Suma de los positivos.	ok
3-Cantidad de positivos.	ok
4-Cantidad de negativos.	ok

5-Cantidad de ceros.	ok	

6-Cantidad de números pares. ok

7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta;
	var numIngresado;
	var numPositivos;
	var numNegativos;
	var contPositivo;
	var contNegativo;
	var contCeros;
	var contPares;
	var promPositivos;
	var promNegativos;
	var difPosNeg;

	respuesta = "si";
	numNegativos = 0;
	numPositivos = 0;
	contNegativo = 0;
	contPositivo = 0;
	contCeros = 0;
	contPares = 0;


	while(respuesta == "si")
	{
		numIngresado = prompt("Ingrese el numero deseado");
		numIngresado = parseInt(numIngresado);

		if(numIngresado < 0)
		{
			numNegativos = numIngresado + numNegativos;
			contNegativo = contNegativo +1;
		}
		else if(numIngresado > 0)
		{
			numPositivos = numIngresado + numPositivos;
			contPositivo = contPositivo +1;
		}
		else
		{
			contCeros = contCeros +1;
		}

		if((numIngresado % 2) != 1)
		{
			contPares = contPares + 1
		}

		respuesta = prompt("Desea continuar ingrese si o no");
	}

	promPositivos = numPositivos /contPositivo;
	promNegativos = numNegativos /contNegativo;
	difPosNeg = numPositivos - numNegativos;

	document.write('1 La suma de los numeros negativos es: ' + numNegativos);
	document.write('<br>2 La suma de los numeros positivos es: ' + numPositivos);
	document.write('<br>3 La cantidad de numeros positivos es: ' + contPositivo);
	document.write('<br>4 La cantidad de numeros negativos es: ' + contNegativo);
	document.write('<br>5 La cantidad de ceros es: ' + contCeros);
	document.write('<br>6 La cantidad de numeros pares es: ' + contPares);
	document.write('<br>7 El promedio de positvos es: ' + promPositivos);
	document.write('<br>8 El prompedio de negativos es: ' + promNegativos);
	document.write('<br>9 La diferencia de los positivos y los negativos es: ' +difPosNeg);
}//FIN DE LA FUNCIÓN