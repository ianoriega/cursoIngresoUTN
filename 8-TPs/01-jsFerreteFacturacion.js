/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioUnoInt;
	var precioDosInt;
	var precioTresInt;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres= txtIdPrecioTres.value;

	precioUnoInt = parseInt(precioUno);
	precioDosInt = parseInt(precioDos);
	precioTresInt = parseInt(precioTres);

	resultado = precioUnoInt + precioDosInt + precioTresInt;

	alert("El resultado de la suma es: "+resultado);




}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioUnoInt;
	var precioDosInt;
	var precioTresInt;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres= txtIdPrecioTres.value;
	
	precioUnoInt = parseInt(precioUno);
	precioDosInt = parseInt(precioDos);
	precioTresInt = parseInt(precioTres);

	resultado = (precioUnoInt + precioDosInt + precioTresInt) / 3;

	alert("el precio promedio es: "+ resultado);


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioUnoInt;
	var precioDosInt;
	var precioTresInt;
	var resultado;
	var valorIva;
	var resultadoFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres= txtIdPrecioTres.value;

	precioUnoInt = parseInt(precioUno);
	precioDosInt = parseInt(precioDos);
	precioTresInt = parseInt(precioTres);

	resultado = precioUnoInt + precioDosInt + precioTresInt;

	valorIva = (21 * resultado) /100;

	resultadoFinal = resultado + valorIva;

	alert("El resultado de la suma con iva es: "+resultadoFinal);
}