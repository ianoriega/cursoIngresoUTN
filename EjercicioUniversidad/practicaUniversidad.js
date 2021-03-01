function probarEjercicio()
{
	var nombreAlumno;
	var carreraElejida;
	var estadoCarrera;
	var sexoAlumno;
	var edadAlumno;
	var notaAlumno;
	var continuar;

	var totalAlumnos;
	var totalMujeresProgramacion;
	var totalNoBinarios;
	var promedioNotas;
	var edadPsicologia;
	var nombrePsicologia;
	var sexoPsicologia;
	var notaNoBinario;
	var nombreNoBinario;
	var estadoNoBinario;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseño;
	var carreraMayor;
	var notasFinalizantes;
	var contadorFinalizantes;

	totalAlumnos = 0;
	totalMujeresProgramacion = 0;
	totalNoBinarios = 0;
	edadPsicologia = 0;
	notaNoBinario = 0;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDiseño = 0;
	notasFinalizantes = 0;
	contadorFinalizantes = 0;


	do
	{	
		do
		{
			nombreAlumno = prompt("Ingrese su nombre");
		}while(nombreAlumno == " ");

		do
		{
			carreraElejida = prompt("Seleccione su carrera: Programación / Psicología / Diseño gráfico");
		}while(carreraElejida != "Programación" && carreraElejida != "Psicología" && carreraElejida != "Diseño gráfico");
			if(carreraElejida == "Programación")
			{
				contadorProgramacion = contadorProgramacion +1;
			}
			else if(carreraElejida == "Psicología")
			{
				contadorPsicologia = contadorPsicologia +1;
			}
			else
			{
				contadorDiseño = contadorDiseño +1;
			}

		do
		{
			estadoCarrera = prompt("Seleccione el estado de su carrera: en curso / abandono / finalizado");
		}while(estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado");
			if(estadoCarrera == "finalizado")
			{
				contadorFinalizantes = contadorFinalizantes +1;
			}

		do
		{
			sexoAlumno = prompt("Ingrese su sexo: femenino / masculino / nobinario");
		}while(sexoAlumno != "femenino" && sexoAlumno != "masculino" && sexoAlumno != "nobinario");

		do
		{
			edadAlumno = prompt("Ingrese su edad");
			edadAlumno = parseInt(edadAlumno);
		}while(edadAlumno < 18);

		do
		{
			notaAlumno = prompt("Ingrese su nota");
			notaAlumno = parseInt(notaAlumno);
		}while(notaAlumno <1 || notaAlumno >10);
			if(estadoCarrera == "finalizado")
			{
				notasFinalizantes = notasFinalizantes + notaAlumno;
			}

		totalAlumnos = totalAlumnos +1

		if(sexoAlumno == "femenino" && carreraElejida == "Programación")
		{
			totalMujeresProgramacion = totalMujeresProgramacion +1;
		}

		if(sexoAlumno == "nobinario")
		{
			totalNoBinarios = totalNoBinarios + 1;
		}

		if(carreraElejida == "Psicología")
		{
			if(edadAlumno > edadPsicologia)
			{
				edadPsicologia = edadAlumno;
				nombrePsicologia = nombreAlumno;
				sexoPsicologia = sexoAlumno;
			}
			else if(sexoAlumno == "nobinario")
			{
				if(notaAlumno >= notaNoBinario)
				{
					notaNoBinario = notaAlumno;
					nombreNoBinario = nombreAlumno;
					estadoNoBinario = estadoCarrera;
				}
			}
		}

		continuar = confirm("desea continuar cargando datos");

	}while(continuar == true);

	if(contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDiseño)
	{
		carreraMayor = "Programacion";
	}
	else if(contadorPsicologia > contadorProgramacion && contadorPsicologia > contadorDiseño)
	{
		carreraMayor = "Psicología";
	}
	else if(contadorDiseño > contadorProgramacion && contadorDiseño > contadorPsicologia)
	{
		carreraMayor = "Diseño";
	}
	else
	{
		carreraMayor = "hay carreras con la misma cantidad de alumnos";
	}

	promedioNotas = notasFinalizantes / contadorFinalizantes;


	document.write("<br> La cantidad de alumnos de programacion es: ");
	document.write("<br>" + contadorProgramacion);
	document.write("<br> La cantidad de alumnos de Psicología es: ");
	document.write("<br>" + contadorPsicologia);
	document.write("<br> La cantidad de alumnos de Diseño es: ");
	document.write("<br>" + contadorDiseño);
	document.write("<br> La cantidad de mujeres que cursan programacion es: ")
	document.write("<br>" + totalMujeresProgramacion);
	document.write("<br> La cantidad de alumnos no binarios es:");
	document.write("<br>" + totalNoBinarios);
	document.write("<br> El promedio de notas de los alumnos finalizantes es:");
	document.write("<br>" + promedioNotas);
	document.write('<br>' + nombrePsicologia + ' de ' + edadPsicologia + ' de sexo ' + sexoPsicologia + ' es el alumno mayor de Psicología');
	document.write('<br>' + nombreNoBinario + ' de nota ' + notaNoBinario + ' de carrera en estado ' + estadoNoBinario);
	document.write("<br> es el mejor alumno de sexo no binario que estudia Psicología");
	document.write("<br> La carrera con mas alumnos es: " + carreraMayor);





}
		