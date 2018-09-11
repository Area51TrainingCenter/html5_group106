//var objeto = {"nombre":"alonso","apellido":"perez"};
jQuery(document).ready(function(){
	jQuery(".btnenviar").click(function(){
		//var user = jQuery("#usuario").val();
		//var pass = jQuery("#password").val();
		//modificar valor de input
		//jQuery("#usuario").val("nuevo valor");
		jQuery.ajax({
			url:"ac/login.php",
			dataType: "json",
			method: "post",
			//metodo 1x1
			/*data:{
				usuario : user,
				password : pass
			}*/
			//metodo serializable
			data: jQuery("#formulario").serialize(),
			beforeSend : function(){
				alert("enviando....");	
			}
			/*
			version tradiional
			sucess : function(data){

			}*/
		}).done(function(data){
			//alert(data);
			if(data.rpta == true)
			{
				var html = "<table>";
				html+= "<tr><td>Mensaje</td><td>"+data.mensaje+"</td></tr>";
				html+= "<tr><td>DNI</td><td>"+data.dni+"</td></tr>";
				html+= "<tr><td>Nombre</td><td>"+data.nombre+"</td></tr>";
				html+= "<tr><td>Apellido</td><td>"+data.apellido+"</td></tr>";
				html+= "<tra><td>Fecha de nacimiento</td><td>"+data.fecha+"</td></tr>";
				html+= "</table>";
				jQuery("#rpta").html(html);
			}else{
				jQuery("#rpta").html(data.mensaje);
			}
			//
		});
	});

	jQuery("#consultar").click(function(){
		var busqueda = jQuery("#busqueda").val();
		jQuery.ajax({
			url:"ac/consultar.php",
			dataType: "json",
			method: "post",
			data:{
				buscar : busqueda,
			},
			beforeSend : function(){
				alert("enviando....");	
			}
		}).done(function(data){
			//alert(data);
			var html = "<table>";
			jQuery.each(data,function(indice,elemento){
				//metodo1
				//var usuario = data[indice];

				//metodo2
				//var usuario = jQuery(this)[0];

				//metodo3
				var usuario = elemento;

				html+= "<tr><td>DNI</td><td class='edit"+indice+"'>"+usuario.dni+"</td></tr>";
				html+= "<tr><td>Nombre</td><td class='edit"+indice+"'>"+usuario.nombre+"</td></tr>";
				html+= "<tr><td>Apellido</td><td class='edit"+indice+"'>"+usuario.apellido+"</td></tr>";
				html+= "<tra><td>Fecha de nacimiento</td><td class='edit"+indice+"'>"+usuario.fecha+"</td></tr>";
				html+= "<tra><td>Genero</td><td class='edit"+indice+"'>"+usuario.genero+"</td></tr>";
				html+= "<tra><td>Editar</td><td><a class='btneditar' href='#'>CLICK AQUI</a></td></tr>";
			})

			html+= "</table>";
			jQuery("#resultado").html(html);
	
			//
		});
	});
});

jQuery(document).on("click",".btneditar",function(){
	var indice = jQuery(".btneditar").index(this);
	jQuery("td.edit"+indice).each(function(i,val){
		var texto = jQuery(this).text();
		var html = "<input type='text' value='"+texto+"'>";
		jQuery(this).html(html);
	});
})
