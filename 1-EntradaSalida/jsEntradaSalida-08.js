/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var numeroDividendoParse;
	var numeroDivisorParse;
	var resto;

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividendoParse = parseInt(numeroDividendo);
	numeroDivisorParse = parseInt(numeroDivisor);

    
 
    resto =  numeroDividendoParse % numeroDivisorParse;


    alert("El resto es: "+resto);
}
