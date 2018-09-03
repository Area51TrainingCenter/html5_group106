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

});