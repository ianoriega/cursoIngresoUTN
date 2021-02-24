function mostrar()
{
	var edad;
	var edadInt;
    var estadoCi;

    edad = txtIdEdad.value;
    edadInt = parseInt(edad);
    estadoCi = document.getElementById("estadoCivil").value;
    
    if(edadInt <= 17 && estadoCi == "Casado" || estadoCi == "Divorciado"){
    	alert("Es muy pequeño para NO ser soltero");
    }


}//FIN DE LA FUNCIÓN