jQuery(document).ready(function(){
	jQuery(".ejemplogaleria1 .columnas img").click(function(){
		jQuery(this).addClass("bn");
		var rutagrande = jQuery(this).data("img");
		jQuery(".conteendorimagen img").attr("src",rutagrande);
		jQuery(".trama").fadeIn("fast",function(){
			jQuery(".conteendorimagen").fadeIn("slow");
		});
	});

	jQuery(".cerrarlightbox.bn").click(function(){
		jQuery(".columnas img").removeClass("bn");
		jQuery(".conteendorimagen").fadeOut("fast",function(){
			jQuery(".trama").fadeOut("slow");
			jQuery(".conteendorimagen img").attr("src","");
		});
	});
});