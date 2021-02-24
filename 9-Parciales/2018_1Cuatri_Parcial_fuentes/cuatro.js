function mostrar()
{
   var primerNumero;
   var segundoNumero;
   var resultadoSuma;
   var resultadoResta;

   primerNumero = prompt("por favor ingrese el primer numero");
   primerNumero = parseInt(primerNumero);

   segundoNumero = prompt("por favor ingrese el segundo numero");
   segundoNumero = parseInt(segundoNumero);
   resultadoSuma = primerNumero + segundoNumero;
   resultadoResta = primerNumero - segundoNumero

   if(primerNumero == segundoNumero)
   {
   	  alert("los numeros ingresados son iguales: " + primerNumero + " " + segundoNumero);
   }
   else if(primerNumero > segundoNumero)
   {
   	  alert("El resultado de la resta es: " + resultadoResta);

   }
   else if(primerNumero < segundoNumero && resultadoSuma > 10)
   {

   	  alert("La suma es: " + resultadoSuma + " y supero el 10");
   }
   else
   {
   	alert("La suma es " + resultadoSuma);
   }

}
