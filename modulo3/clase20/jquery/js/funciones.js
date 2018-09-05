jQuery(document).ready(function(){

	jQuery(".btnadd").click(function(){
		if(jQuery(".cuadro").hasClass("verde") == false)
		{
			jQuery(".cuadro").addClass("verde");
		}else{
			alert("ya tiene la clase");
		}
	});

	jQuery(".btnremove").click(function(){
		jQuery(".cuadro").removeClass("verde");
	});

	jQuery(".btntoggle").click(function(){
		jQuery(".cuadro").toggleClass("verde");
	});

	var contador = 0;
	jQuery("#boton").click(function(){
		contador++;
		//isnertar
		//jQuery(".resultado").html("<h1>Titulo "+contador+"</h1>");

		//agregar al final
		//jQuery(".resultado ul").append("<li>Item "+contador+"</li>");


		//agregar al inicio
		jQuery(".resultado ul").prepend("<li>Item "+contador+"</li>");
		jQuery(".resultado").css({
			"color":"red",
			"font-size" :contador+"px",
		});
	});

});