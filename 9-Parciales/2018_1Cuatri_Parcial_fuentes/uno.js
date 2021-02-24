
function mostrar()
{
   var ancho;
   var largo;
   var anchoParseado;
   var largoParseado;
   var resultado;

   ancho = prompt("Por favor ingrese el ancho del rectangulo: ");
   largo = prompt("por favor ingrese el largo del rectangulo: ");

   anchoPareseado = parseInt(ancho);
   largoParseado = parseInt(largo);

   resultado = (anchoPareseado * 2) + (largoParseado * 2);

   alert("El perimetro del rectangulo es: "+resultado);
}
