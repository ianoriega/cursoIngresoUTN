function mostrar()
{
	var planeta;
	planeta = prompt("Ingrese un planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
		   alert("aca hace mas calor");
		   break;
		case "tierra":
		   alert("aca vivimos");
		   break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		   alert("aca hace frio");
		   break;
		default:
		   alert("el planeta ingresado no es valido");
		   break;
	}

}
