/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var claveCorrecta;

    while(claveCorrecta != "utn750")
    {
     	claveIngresada = prompt("Ingrese el numero clave");
    	claveCorrecta = claveIngresada;
    }   
    alert("La clave ingresada es correcta");
	
}//FIN DE LA FUNCIÓN
