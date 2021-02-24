function mostrar()
{ 
	var numero;
	var numeroSinDecimal;

	numero = Math.random()*101;
	numeroSinDecimal = Math.trunc(numero);
  
    if(numeroSinDecimal > 0 && numeroSinDecimal < 11){
       alert(numeroSinDecimal);
    }
}//FIN DE LA FUNCIÓN