/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var temperaturaIngresadaInt;
	var celsius;


	temperaturaIngresada = txtIdTemperatura.value;
	temperaturaIngresadaInt = parseInt(temperaturaIngresada);

	celsius = (temperaturaIngresadaInt - 32) * (5/9);

	alert("La temperatura ingresada: " + temperaturaIngresada + "° Fahrenheit, equivale a " + celsius + "° celsius");

    
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var temperaturaIngresadaInt;
	var Fahrenheit;

	temperaturaIngresada = txtIdTemperatura.value;
	temperaturaIngresadaInt = parseInt(temperaturaIngresada);

	Fahrenheit = (temperaturaIngresadaInt * (9/5)) + 32

	alert("La temperatura ingresada: " + temperaturaIngresada + "° celsius, equivale a " + Fahrenheit + "° Fahrenheit");
	
}
