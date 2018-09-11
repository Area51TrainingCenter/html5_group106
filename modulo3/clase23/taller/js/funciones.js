jQuery(document).ready(function(){
	var wow = new WOW();
	wow.init();

	jQuery(".linkh").click(function(){
		/*slideDown*/
		//jQuery(".menuprincipal").slideDown("fast");

		/*slideUp*/
		//jQuery(".menuprincipal").slideUp("fast");

		/*slideToggle*/
		jQuery("header.cabecera .menu-negro .menu-negro-izquierda nav").slideToggle("slow",function(){
			//alert("ay que rico");
		});

	});

	jQuery(".menu-negro-izquierda nav ul li > a, .menu-flotante ul li a").click(function(e){
		//e.preventDefault();
		var id = jQuery(this).attr("href");
		jQuery("html,body").stop().animate({
			"scrollTop" : jQuery(id).offset().top
		},"slow");
	});

	jQuery("a.arriba").click(function(e){
		//e.preventDefault();
		jQuery("html,body").stop().animate({
			"scrollTop" : 0
		},"slow");
	});

	jQuery(".menu-flotante > a").click(function(e){
		e.preventDefault();
		jQuery(".menu-flotante").toggleClass("abrir");
	});
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 300)
	{
		jQuery("a.arriba").stop().fadeIn("slow");
	}else{
		jQuery("a.arriba").stop().fadeOut("slow");
	}

	if(jQuery(window).scrollTop() < 150){
		jQuery(".menu-flotante").removeClass("abrir");
	}
})




