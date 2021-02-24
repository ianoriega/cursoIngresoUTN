/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var largoInt;
	var anchoInt;
	var perimetro;
	var resultado;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;
	
	largoInt = parseInt(largo);
	anchoInt = parseInt(ancho);
	
	perimetro = largoInt * 2 + anchoInt * 2;
	resultado = perimetro * 3;

	alert("La cantidad de alambre necesaria es: "+resultado);

}
function Circulo () 
{
	var radio;
	var radioInt;
	var diametro;
	var circunferencia;
	var resultado;

	radio = txtIdRadio.value;
	radioInt = parseInt(radio);
    diametro = radioInt * 2;
    circunferencia = diametro * Math.PI;
    resultado = circunferencia * 3;

    alert("La cantidad de alambre necesario es: " + resultado);
	
}
function Materiales () 
{
	var ancho;
	var largo;
	var anchoInt;
	var	largoInt;
	var area;
	var cemento;
	var cal;

	ancho = txtIdAncho.value;
	largo = txtIdLargo.value;

	anchoInt = parseInt(ancho);
	largoInt = parseInt(largo);

	area = anchoInt * largoInt;

	cemento = area * 2;
	cal = area * 3;

	alert("La cantidad de bolsas de cemento necesarias son: " + cemento + " La cantidad de bolsas de cal necesarias son: " + cal);


	
}