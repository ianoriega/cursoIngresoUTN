/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparitas;
	var descuento;
	var precioFinal;
	var precioUnitarioLamparita = 35;
	var marcaLampara;
	var precioConDescuento;
	var valorIngresosBrutos;

	cantidadLamparitas = txtIdCantidad.value;
	cantidadLamparitas = parseInt(cantidadLamparitas);

	marcaLampara = Marca.value;

	/*
    if(cantidadLamparitas>5)
	{
       descuento = 50;
	}
    else
    { 
    	if(cantidadLamparitas == 5)
    	{
    		if(marcaLampara == "ArgentinaLuz")
    		{
    			descuento = 40;
    		}
    		else
    		{
    			descuento = 30;
    		}
    	}
    	else
    	{
    		if(cantidadLamparitas == 4)
    		{
    			if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
    			{
    				descuento = 25;
    			}
    			else
    			{
    				descuento = 20;
    			}

    		}
    		else
    		{
    			if(cantidadLamparitas == 3)
    			{
    				if(marcaLampara == "ArgentinaLuz")
                    {
                    	descuento = 15;
                    }
                    else
                    {
                    	if(marcaLampara =="FelipeLamparas")
                        {
                    	descuento = 10;
                        }
                        else
                        {
                    	descuento = 5;
                        }
                    }
    			}
    			else
    			{
    				descuento = 0
    			}
    		}
    	}
    }

    precioFinal = cantidadLamparitas * precioUnitarioLamparita;
    precioConDescuento = precioFinal - (precioFinal * descuento /100);
    valorIngresosBrutos = precioConDescuento *10 /100;


    if(precioConDescuento > 120)
    {
    	precioConDescuento = precioConDescuento + valorIngresosBrutos;
    	alert("IIBB Usted pagó " + precioConDescuento + " ,siendo " + valorIngresosBrutos + " el impuesto que se pago.");

    }
    else
    {
        txtIdprecioDescuento.value = precioConDescuento;
    }
    */

    switch(cantidadLamparitas)
    {
        case 1:
        case 2:
           descuento = 0;
           break
        case 3:
           switch(marcaLampara)
           {
               case "ArgentinaLuz":
                  descuento = 15;
                  break
               case "FelipeLamparas":
                  descuento = 10;
                  break
               default:
                  descuento = 5;
                  break
           }
           break
        case 4:
           switch(marcaLampara)
           {
               case "ArgentinaLuz":
               case "FelipeLamparas":
                  descuento = 25;
                  break
               default:
                  descuento = 20;
                  break
           }
           break
        case 5:
           switch(marcaLampara)
           {
               case "ArgentinaLuz":
                  descuento = 40;
                  break
               default:
                  descuento = 30;
                  break

           }
           break
        default:
           descuento = 50;
           break
    }
    
    precioFinal = cantidadLamparitas * precioUnitarioLamparita;
    precioConDescuento = precioFinal - (precioFinal * descuento /100);
    valorIngresosBrutos = precioConDescuento *10 /100;

    if(precioConDescuento > 120)
    {
        precioConDescuento = precioConDescuento + valorIngresosBrutos;
        alert("IIBB Usted pagó " + precioConDescuento + " ,siendo " + valorIngresosBrutos + " el impuesto que se pago.");

    }
    else
    {
        txtIdprecioDescuento.value = precioConDescuento;
    }

}
