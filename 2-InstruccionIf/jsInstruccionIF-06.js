function mostrar()
{
	var edad;
	var edadInt;

	edad = txtIdEdad.value;
	edadInt = parseInt(edad);

	if(edadInt >= 18){
        alert("Usted es mayor de edad");
	}
	else
	{
		if(edadInt <= 17 && edadInt >= 13){
			alert("Usted es adolescente");
		}
		else
		{
			if(edadInt <=12){
				alert("Usted es un niño");
			}
		}
	}	



}//FIN DE LA FUNCIÓN