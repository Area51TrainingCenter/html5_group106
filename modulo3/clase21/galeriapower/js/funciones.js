jQuery(document).ready(function(){
	jQuery(".ejemplogaleria1 .columnas").click(function(){
		var indice = jQuery(".ejemplogaleria1 .columnas").index(this); 

		jQuery(".ejemplogaleria1 .columnas").eq(indice).find("img").addClass("bn");

		/*
		artilugio
		var lista = jQuery("#lista"+indice+" li");*/

		var lista = jQuery(".ejemplogaleria1 ul").eq(indice).find("li");

		jQuery(".resultadogaleria .container-2").html("");	
		lista.each(function(i,el){
			var rutaimg = jQuery(this).find("img").attr("src");
			var rutaimgnormal = jQuery(this).data("img");
			var html = "<div class='columnas'><img data-img='"+rutaimgnormal+"' src='"+rutaimg+"'></div>";
			jQuery(".resultadogaleria .container-2").append(html);
		})
	});

	jQuery(".cerrarlightbox.bn").click(function(){
		jQuery(".columnas img").removeClass("bn");
		jQuery(".conteendorimagen").fadeOut("fast",function(){
			jQuery(".trama").fadeOut("slow");
			jQuery(".conteendorimagen img").attr("src","");
		});
	});
});

jQuery(document).on("click",".resultadogaleria .columnas img",function(){
	jQuery(this).addClass("bn");
	var rutagrande = jQuery(this).data("img");
	jQuery(".conteendorimagen img").attr("src",rutagrande);
	jQuery(".trama").fadeIn("fast",function(){
		jQuery(".conteendorimagen").fadeIn("slow");
	});
})