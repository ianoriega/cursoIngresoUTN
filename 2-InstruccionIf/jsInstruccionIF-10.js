function mostrar()
{
    var numero;
    var numeroSinDecimal;

    numero = Math.random()*10;
    numeroSinDecimal = Math.trunc(numero);

    if(numeroSinDecimal == 9 || numeroSinDecimal == 10)
    {
    	alert("La nota del examen es: " + numeroSinDecimal+ " EXCELENTE");
    }
    else if(numeroSinDecimal>= 4 && numeroSinDecimal < 9)
    {
        alert("La nota del examen es: " + numeroSinDecimal + " APROBÓ");
    }
    else
    {
    	alert("La nota del examen es: "+ numeroSinDecimal + " Vamos, la proxima se puede");
    }

}//FIN DE LA FUNCIÓN