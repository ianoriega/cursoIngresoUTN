
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var cantidadJabones;
	var fabricanteJabones;
	var precioJabones;
	var mayorCantidad;
	var precioMayorCantidad;
	var productoMayorCantidad;
	var cantidadBarbijos;
	var precioTotal;
	var promedio;

	cantidadJabones = 0;
	precioJabones = 0;
	mayorCantidad = 0;
	cantidadBarbijos = 0;
	precioTotal = 0;


	for(var i = 0; i<5; i++)
	{
		do
		{
			tipoProducto = prompt("Ingrese el producto deseado: barbijo - jabón - alcohol");
		}while(tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol");

		do
		{
			precioProducto = prompt("Ingrese el precio del porducto 100/300");
			precioProducto = parseInt(precioProducto);
		}while(precioProducto < 100 || precioProducto >300);

		do
		{
			cantidadUnidades = prompt("Ingrese la cantidad de unidades 1 a 1000:");
			cantidadUnidades = parseInt(cantidadUnidades);
		}while(cantidadUnidades <1 || cantidadUnidades >1000);

		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		if(tipoProducto == "jabón")
		{
			if(precioProducto > precioJabones)
			{
				precioJabones = precioProducto;
				cantidadJabones = cantidadUnidades;
				fabricanteJabones = fabricante;
			}		
		}

		if(cantidadUnidades > mayorCantidad)
		{
			mayorCantidad = cantidadUnidades;
			precioMayorCantidad = precioProducto;
			productoMayorCantidad = tipoProducto;
		}

		if(tipoProducto == "barbijo")
		{
			cantidadBarbijos = cantidadBarbijos + cantidadUnidades;
		}
		
		precioTotal = precioTotal + precioProducto;
	}	

	promedio = precioTotal +100 / precioMayorCantidad;
	
	document.write("El jabon mas caro es fabricado por: " + fabricanteJabones + " y se compraron " + cantidadJabones);
	document.write("<br> El promedio de " + productoMayorCantidad + " de la compra es: " + promedio);

	if(cantidadBarbijos >0)
	{
		document.write("<br> La cantidad de barbijos comprada es: " + cantidadBarbijos);
	}
	else
	{
		document.write("<br> No se compraron barbijos");
	}
}
