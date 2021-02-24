/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	
/*alert("Esto funciona de maravilla");*/

	var numero;
	var contador = 1;
	var resultado = 0;

	while(contador <6)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		resultado = resultado + numero;

		contador++;

	}
	alert("El resultadasdsadasao de la suma es " + resultado);
}



