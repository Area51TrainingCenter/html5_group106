jQuery(document).ready(function(){
	jQuery(".btnabrir").click(function(){
		//Mostrar con addClass
		/*
		jQuery(".trama").addClass("abrir");
		jQuery(".contenedor-img").addClass("abrir");
		*/

		/*
		Mostrar con show();

		jQuery(".trama").show();
		jQuery(".contenedor-img").show();
		*/

		/*
		Mostrar con fadeIn()
		*/
		jQuery(".trama").fadeIn("fast",function(){
			jQuery(".contenedor-img").fadeIn("slow");
		});
	});

	jQuery(".btncerrar").click(function(){
		//Ocultar con addClass
		/*
		jQuery(".trama").removeClass("abrir");
		jQuery(".contenedor-img").removeClass("abrir");
		*/

		/*
		ocultar con hide();

		jQuery(".trama").hide();
		jQuery(".contenedor-img").hide();
		*/

		/*ocultar con fadeOut()*/
		jQuery(".contenedor-img").fadeOut("fast",function(){
			jQuery(".trama").fadeOut("slow");
		});
	});
});