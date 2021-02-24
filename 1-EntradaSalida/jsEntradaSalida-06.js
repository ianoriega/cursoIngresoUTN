/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var numero1parse;
	var numero2parse;
	var suma

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1parse = parseInt(numero1);
	numero2parse = parseInt(numero2);

    suma = numero1parse+numero2parse

	alert("El resultado de la suma es: "+ suma);
}
