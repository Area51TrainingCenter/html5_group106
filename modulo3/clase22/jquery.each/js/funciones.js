var lista = [1,2,"hola"];
jQuery(document).ready(function(){
	jQuery("a").click(function(){
		jQuery.each(lista,function(indice,elemento){
			alert(elemento);
		})
	});
});