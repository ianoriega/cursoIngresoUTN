//Realizar el algoritmo que pida los datos necesarios 
//para un triángulo equilátero por prompt y que muestre el perímetro por alert.
function mostrar()
{
	var ladoUno;
	var ladoDos;
	var ladoTres;
	var perímetro;

	ladoUno = prompt("Ingrese el primer lado");
	ladoUno = parseInt(ladoUno);
	ladoDos = prompt("Ingrese el segundo lado");
	ladoDos = parseInt(ladoDos);
	ladoTres= prompt("Ingrese el tercer lado");
	ladoTres= parseInt(ladoTres);

	perímetro = ladoUno + ladoDos + ladoTres;
	alert("El perimetro del triangulo es: " + perímetro);

}
