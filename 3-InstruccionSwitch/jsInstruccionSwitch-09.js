function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var descuentoAumento;

	switch(estacionIngresada){
		case "Invierno":
		    switch(destinoIngresado){
		    	case "Bariloche":
		    	descuentoAumento = 1.2;
		    	   break
		    	case "Mar del plata":
		    	descuentoAumento = 0.8;
		    	   break
		    	case "Cataratas":
		    	descuentoAumento = 0.9;
		    	   break
		    	case "Cordoba":
		    	descuentoAumento = 0.9;
		    	   break
		    }
		    break

		case  "Verano":
		    switch(destinoIngresado){
		    	case "Bariloche":
		    	descuentoAumento = 0.8;
		    	   break
		    	case "Mar del plata":
		    	descuentoAumento = 1.2;
		    	   break
		    	case "Cataratas":
		    	descuentoAumento = 1.1;
		    	   break
		    	case "Cordoba":
		    	descuentoAumento = 1.1;
		    	   break 
		    }
		    break

		case "Otoño":
		case "Primavera":
		    switch(destinoIngresado){
                case "Bariloche":
                descuentoAumento = 1.1;
                   break
                case "Mar del plata":
                descuentoAumento = 0.9;
                   break
                case "Cataratas":
                descuentoAumento = 0.9;
                   break
                case "Cordoba":
                descuentoAumento = 1;
                   break
            }
            break
	}
	alert("Estadia es igual a: " + 15000 * descuentoAumento);

}//FIN DE LA FUNCIÓN