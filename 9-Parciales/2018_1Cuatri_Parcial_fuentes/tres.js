function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var precioParseado;
	var porcentajeDescuentoParseado;
	var descuento;
	var resultado;
	

	precio = prompt("ingrese el precio");
	precioParseado = parseInt(precio);

	porcentajeDescuento = prompt("ingrese el descuento");
	porcentajeDescuentoParseado = parseInt(porcentajeDescuento);

	descuento = precioParseado * porcentajeDescuentoParseado / 100;

	resultado = precioParseado - descuento;


	elPrecioFinal.value = resultado;

	


}
