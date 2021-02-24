/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importePareseado;
	var descuento;
	var importeFinal;

	importe = txtIdImporte.value;
	
	importePareseado = parseInt(importe);
	
	descuento = (importePareseado * 25) /100;
	
	importeFinal= importePareseado - descuento;
	
	txtIdResultado.value = importeFinal;

}
