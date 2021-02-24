/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
   var numeroUno;
   var numeroDos;
   var numeroUnoParse;
   var numeroDosParse;
   var suma 

   numeroUno = txtIdNumeroUno.value;
   numeroDos = txtIdNumeroDos.value;

   numeroUnoParse = parseInt(numeroUno);
   numeroDosParse = parseInt(numeroDos);

   suma = numeroUnoParse + numeroDosParse;

   alert("La suma es igual a: "+suma);
}

function restar()
{
   var numeroUno;
   var numeroDos;
   var numeroUnoParse;
   var numeroDosParse;
   var resta; 

   numeroUno = txtIdNumeroUno.value;
   numeroDos = txtIdNumeroDos.value;

   numeroUnoParse = parseInt(numeroUno);
   numeroDosParse = parseInt(numeroDos);

   resta = numeroUnoParse - numeroDosParse;

   alert("La resta es igual a: "+resta);
}

function multiplicar()
{ 
   var numeroUno;
   var numeroDos;
   var numeroUnoParse;
   var numeroDosParse;
   var multiplicacion; 

   numeroUno = txtIdNumeroUno.value;
   numeroDos = txtIdNumeroDos.value;

   numeroUnoParse = parseInt(numeroUno);
   numeroDosParse = parseInt(numeroDos);

   multiplicacion = numeroUnoParse * numeroDosParse;

   alert("La multiplicacion es igual a: "+multiplicacion);
}

function dividir()
{
   var numeroUno;
   var numeroDos;
   var numeroUnoParse;
   var numeroDosParse;
   var division;

   numeroUno = txtIdNumeroUno.value;
   numeroDos = txtIdNumeroDos.value;

   numeroUnoParse = parseInt(numeroUno);
   numeroDosParse = parseInt(numeroDos);

   division = numeroUnoParse / numeroDosParse;

   alert("La division es igual a: "+division);
}

