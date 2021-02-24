function mostrar()
{
	var primerNombre;
	var primerPeso;
	var segundoNombre;
	var segundoPeso;
	var pesoTotal;
	var promedio;

	primerNombre = prompt("Ingrese su nombre");
	primerPeso = prompt("Ingrese su peso");
	primerPeso = parseInt(primerPeso);
	segundoNombre = prompt("Ingrese el nombre de su pareja");
	segundoPeso = prompt("Ingrese el peso de su pareja");
	segundoPeso = parseInt(segundoPeso);

	pesoTotal = primerPeso + segundoPeso;
	promedio = pesoTotal /2;

	alert("Ustedes se llaman " + primerNombre + " y " + segundoNombre + " , pesan " + primerPeso + " y " + segundoPeso + " kilos, que sumados son " + pesoTotal + " y dan un promedio de " + promedio + " kilos.");
  
}
