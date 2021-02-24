/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/
function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoResta;

	primerNumero = prompt("Ingrese el primer numero");
	primerNumero = parseInt(primerNumero);
	segundoNumero = prompt("Ingrese el segundoNumero");
	segundoNumero = parseInt(segundoNumero);
	resultadoResta = primerNumero - segundoNumero;

	if(primerNumero == segundoNumero)
	{
     	alert(primerNumero + " " +segundoNumero);
	}
	else if(primerNumero > segundoNumero)
	{
		resultadoResta = primerNumero - segundoNumero;
		if(resultadoResta > 10)
		{
			alert("la resta es " + resultadoResta + " y supero el 10");
		}
		else
		{
			alert(resultadoResta);
		}
	}
	else
	{
		alert(primerNumero + segundoNumero);
	}
}
