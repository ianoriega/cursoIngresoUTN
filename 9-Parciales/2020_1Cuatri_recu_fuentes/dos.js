
/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)

d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/



function mostrar()
{
  	var producto;
  	var cantidad;
  	var precio;
  	var totalBolsas;
  	var continuar;
  	var descuento;
  	var totalPrecio;
  	var totalPrecioDescuento;
  	var cantidadArena;
  	var cantidadCal;
  	var cantidadCemento;
  	var productoMasCaro;
  	var precioMasCaro;

  	totalBolsas = 0;
  	totalPrecio = 0;
  	cantidadArena = 0;
  	cantidadCemento = 0;
  	cantidadCal = 0;
  	precioMasCaro = 0;


  	do
  	{
  		do
  		{
  			producto = prompt("Ingrese que producto desea comprar: arena - cal - cemento");
  		}while(producto != "arena" && producto != "cal" && producto != "cemento");

  		do
  		{
  			cantidad = prompt("Ingrese la cantidad que desea comprar");
  			cantidad = parseInt(cantidad);
  		}while(cantidad < 1);

  		do
  		{
  			precio = prompt("Ingrese el precio por bolsa");
  			precio = parseInt(precio);
		}while(precio < 1);
  		
  		totalBolsas = totalBolsas + cantidad;	
  		totalPrecio = totalPrecio + (precio*cantidad);

  		if(totalPrecio > precioMasCaro)
  		{
  			precioMasCaro = totalPrecio;
  			productoMasCaro = producto;
  		}

  		if(producto == "arena")
  		{
  			cantidadArena = cantidadArena + cantidad;
  		}
  		else if(producto == "cal")
  		{
  			cantidadCal = cantidadCal + cantidad;
  		}
  		else
  		{
  			cantidadCemento = cantidadCemento + cantidad;
  		}

  		continuar = confirm("Desea continuar?");
  	}while(continuar == true);

  	
  	if(totalBolsas <=10)
  	{
  		descuento = 0;
  	}
  	else if(totalBolsas >10 && totalBolsas <30)
  	{
  		descuento = 15;
  	}
  	else
  	{
  		descuento = 25;
  	}

  	totalPrecioDescuento = totalPrecio -  (totalPrecio * descuento)/100;

  	if(totalBolsas >10)
  	{
  		document.write("El precio bruto es: " + totalPrecio + " y el precio final con descuento es: " + totalPrecioDescuento);
  	}
  	else
  	{
  		document.write("<br>El precio bruto es: " + totalPrecio);
  	}

  	if(cantidadCemento > cantidadArena && cantidadCemento > cantidadCal)
  	{
  		document.write("<br> El producto con mayor cantidad es Cemento");
  	}
  	else if(cantidadArena > cantidadCemento && cantidadArena > cantidadCal)
  	{
  		document.write("<br> El producto con mayor cantidad es Arena");
  	}
  	else if(cantidadCal > cantidadCemento && cantidadCal > cantidadArena)
  	{
  		document.write("<br> El producto con mayor cantidad es Cal");
  	}
  	else
  	{
  		document.write("<br> Existen productos con iguales cantidades");
  		document.write("<br> Arena: " + cantidadArena);
  		document.write("<br> Cal: " + cantidadCal);
  		document.write("<br> Cemento: " + cantidadCemento);
  	}

  	document.write("<br> El producto mas caro es: " + productoMasCaro);
  	
}
