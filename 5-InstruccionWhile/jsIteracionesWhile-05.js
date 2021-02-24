/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var sexoCorrecto;

	while(sexoCorrecto != "f" && sexoCorrecto != "m")
	{
		sexoIngresado = prompt("Ingrese su sexo (f o m)");
		sexoCorrecto = sexoIngresado;
	}

	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN