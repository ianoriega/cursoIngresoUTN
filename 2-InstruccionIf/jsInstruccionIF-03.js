function mostrar()
{
	var edad;
	var edadInt;

	edad = txtIdEdad.value;
	edadInt= parseInt(edad);

	if(edadInt > 17){

       alert("Usted es mayor de edad");

	}
	else{

       alert("Usted es menor de edad");

    }
}//FIN DE LA FUNCIÓN