/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoIngresado;
	var sueldoIngresadoParseado;
	var resultado;
	var sueldoFinal;

	sueldoIngresado = txtIdSueldo.value;

	sueldoIngresadoParseado = parseInt(sueldoIngresado);

	resultado = (sueldoIngresadoParseado * 10) / 100;

	sueldoFinal = sueldoIngresadoParseado + resultado;

	txtIdResultado.value = sueldoFinal;
}
