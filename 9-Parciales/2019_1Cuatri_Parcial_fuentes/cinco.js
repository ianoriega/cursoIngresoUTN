/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/
function mostrar()
{
	var destino;
	var cantidadDias;
	var valorDia;
	var medioPago;
	var descuento;
	var precioFinal;

	destino = Marca.value;
	cantidadDias = prompt("Ingrese la cantidad de dias");
	cantidadDias = parseInt(cantidadDias);
	medioPago = prompt("Ingrese el medio de pago: debito, mercadoPago, efectivo, otro");
    valorDia = 100;

    switch(destino)
    {
    	case "América":
    		switch(medioPago)
    		{
    			case "debito":
    				descuento = 0.4;
    			break;
    			default:
    				descuento = 0.5;
    			break;
    		}
    	break;
    	case "África":
    		switch(medioPago)
    		{
    			case "mercadoPago":
    			case "efectivo":
    				descuento = 0.25;
    			break;
    			default:
    				descuento = 0.4;
    			break;
    		}
    	break;
    	case "Europa":
    		switch(medioPago)
    		{
    			case "debito":
    				descuento = 0.65;
    			break;
    			case "mercadoPago":
    				descuento = 0.7;
    			break;
    			default:
    				descuento = 0.75;
    			break;
    		}
    	break;
    	default:
    		descuento = 1.2;
    	break;
    }	

    precioFinal = (valorDia * cantidadDias) * descuento;
    alert("El valor de la estadia es: " + precioFinal);

}
