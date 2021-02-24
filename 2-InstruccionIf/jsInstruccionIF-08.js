function mostrar()
{
	var edad;
	var edadInt;
	var estadoCi;

	edad = txtIdEdad.value;
	edadInt = parseInt(edad);
	estadoCi = document.getElementById("estadoCivil").value;

	if(edadInt >= 18 && estadoCi == "Soltero"){
		alert("Es soltero y no es menor.");

	}
	


}//FIN DE LA FUNCIÓN