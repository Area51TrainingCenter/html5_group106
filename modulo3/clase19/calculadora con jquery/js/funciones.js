var numero1 = 0;
var aux = "";
var signo = "";
var elemento;

jQuery(document).ready(function(){
 	elemento = jQuery("#resultado");

	jQuery(".btnnumero").click(function(){
		//attr obteniendo valor
		var numero = jQuery(this).attr("data-numero");
		formarnumero(numero); 
		//attr reemplazando valor
		//jQuery(this).attr("data-numero","23");

		//version data
		//var numero = jQuery(this).data("numero");
	});

	jQuery(".btnsigno").click(function(){
		signo = jQuery(this).attr("data-signo");
		signosimbolo(signo); 
	});

	jQuery("#igual").click(function(){
		var subtotal = 0;
		var numero2 = parseInt(elemento.val());

		if (signo == "sumar") {
			subtotal = numero1 + numero2;
		}else if (signo == "restar") {
			subtotal = numero1 - numero2;
		}else if (signo == "multiplicar") {
			subtotal = numero1 * numero2;
		}else {
			subtotal = numero1 / numero2;
		}

		elemento.val(subtotal);
	});

	jQuery("#resetear").click(function(){
		resetear();
	});
});

function signosimbolo(parametro)
{
	signo = parametro;
	//val: obtener el valor;
	numero1 = parseInt(elemento.val());

	//val: reemplazar el valor;
	elemento.val(0);
	aux = "";
}

function resetear() {
	numero1 = 0;
	aux = "";
	signo = "";
	elemento.val(0);
}

function formarnumero(numero) {
	aux = aux + numero;
	elemento.val(aux);
}