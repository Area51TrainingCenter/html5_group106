jQuery(document).ready(function(){
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
});