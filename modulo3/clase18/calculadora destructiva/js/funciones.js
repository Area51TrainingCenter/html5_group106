var numero1 = 0;
var aux = "";
var signo = "";
var elemento = document.getElementById("resultado");

var btnigual=document.getElementById("igual");
btnigual.addEventListener("click",total);

function signosimbolo(parametro)
{
	signo = parametro;
	numero1 = parseInt(elemento.value);
	elemento.value = "0";
	aux = "";
}

function total() {
	var subtotal = 0;
	var numero2 = parseInt(elemento.value);

	if (signo == "sumar") {
		subtotal = numero1 + numero2;
	}else if (signo == "restar") {
		subtotal = numero1 - numero2;
	}else if (signo == "multiplicar") {
		subtotal = numero1 * numero2;
	}else (signo == "dividir") {
		subtotal = numero1 / numero2;
	}

	elemento.value =  subtotal;
}

function resetear() {
	numero1 = 0;
	signo = "";
	elemento.value =  0;
}

function formarnumero(numero) {
	aux = aux + numero;
	elemento.value =  aux;
}