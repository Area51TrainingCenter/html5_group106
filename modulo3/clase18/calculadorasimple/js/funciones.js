/*datos de netrada*/
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");

/*datos de salida*/
var resultado = document.getElementById("resultado");

/*acciones o eventos*/
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var ce = document.getElementById("ce");

var op = "";

suma.addEventListener("click",function(){
	op = "suma";
});

resta.addEventListener("click",function(){
	op = "resta";
});

multiplicacion.addEventListener("click",function(){
	op = "multiplicacion";
});

division.addEventListener("click",function(){
	op = "division";
});


igual.addEventListener("click",function(){
	//parseFloat parsear numeros decimales
	var n1 = parseInt(numero1.value);
	var n2 = parseInt(numero2.value);
	var rpta = "";

	if(op == "suma"){
		rpta = n1 + n2;
	}else if(op == "resta")
	{
		rpta = n1 - n2;
	}else if(op == "multiplicacion")
	{
		rpta = n1 * n2;
	}else{
		rpta = n1 / n2;
	}

	resultado.value = rpta;
});


ce.addEventListener("click",function(){
	numero1.value = "";
	numero2.value = "";
	resultado.value = "";
});





