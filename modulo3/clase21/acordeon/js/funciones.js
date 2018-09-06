jQuery(document).ready(function(){
	jQuery(".item-titulo").click(function(){
		//solucion con data y attr
		//var indice = jQuery(this).attr("data-indice");

		//solucion con index;
		var indice = jQuery(".item-titulo").index(this);
		/* version 1 */
		/*
		jQuery(".item-cuerpo").eq(indice).slideToggle();
		*/

		/* version 2 */
		/*
		jQuery(".item-cuerpo").slideUp();
		jQuery(".item-cuerpo").eq(indice).slideToggle();
		*/

		/* version 2 */
		
		jQuery(".item-cuerpo").slideUp();
		if(jQuery(this).hasClass("abrir"))
		{
			jQuery(".item-titulo").removeClass("abrir");
		}else{
			jQuery(".item-titulo").removeClass("abrir");
			jQuery(".item-titulo").eq(indice).addClass("abrir");
			jQuery(".item-cuerpo").eq(indice).slideDown();
		}
	})
});