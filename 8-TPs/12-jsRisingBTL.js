/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var	estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var numeroLegajoIngresado;
 	var nacionalidadIngresada;

 	do
 	{
 		edadIngresada = prompt("Ingrese su edad");
 		edadIngresada = parseInt(edadIngresada);
 	}while(edadIngresada <18 || edadIngresada >90);

 	do
 	{
 		sexoIngresado = prompt("Ingrese su sexo con F o M");
 	}while(sexoIngresado != "M" && sexoIngresado != "F");

 	do
 	{
 		estadoCivilIngresado = prompt("Ingrese: 1 para soltero/a, 2 para casado/a, 3 para divorciado/a y 4 para viudo/a");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}while(estadoCivilIngresado <1 || estadoCivilIngresado >4);

 	do
 	{
 		sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto");
 		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	}while(sueldoBrutoIngresado < 8000);

 	do
 	{
 		numeroLegajoIngresado = prompt("Ingrese su numero de legajo");
 		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
 	}while(numeroLegajoIngresado > 9999 || numeroLegajoIngresado <0);

 	do
 	{
 		nacionalidadIngresada = prompt("Ingrese: A para argentinos, E para extranjeros o N para nacionalizados");
 	}while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N");

 	txtIdEdad.value = edadIngresada;
 	txtIdSexo.value = sexoIngresado;
 	txtIdEstadoCivil.value = estadoCivilIngresado;
 	txtIdSueldo.value = sueldoBrutoIngresado;
 	txtIdLegajo.value = numeroLegajoIngresado;
 	txtIdNacionalidad.value = nacionalidadIngresada;
 	
}
