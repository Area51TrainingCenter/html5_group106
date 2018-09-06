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

	jQuery(".btnanimacion").click(function(){
		repetir();
	});

	jQuery(".btneach").click(function(){
		jQuery("ul li").each(function(indice,elemento){
			var clase = jQuery(this).attr("class");
			var texto = jQuery(this).text();
			var html = "<div>La clase del li "+indice+" es "+clase+" y su texto es "+texto+"</div>";
			jQuery(".resultado").append(html);
		})
	});

});

function repetir()
{
	var ancho = jQuery(window).width() - 120;
	var alto = 0;
	
	jQuery(".cuadro").animate({
		"width":"100px",
		"height":"100px",
		"background-color": "green",
		"left" : ancho,
		"top" :0,

		/*"color":"#000",
		"font-size" : "14px",
		"left" : "+=10px"*/
	},"slow",/*{
		duration : 800,
		complete : function(){
			alert("hola mundo");
		},
		done : function(){
			alert("listo");
		}
	}*/
		function(){
			ancho = jQuery(window).width() - 260;
			alto = jQuery(window).height() - 260;
			jQuery(".cuadro").animate({
				"width":"250px",
				"height":"250px",
				"background-color": "yellow",
				"top" : alto,
				"left" : ancho,
			},"slow",function(){
				alto = jQuery(window).height() - 50;
				jQuery(".cuadro").animate({
					"width":"50px",
					"height":"50px",
					"background-color": "blue",
					"left" : 0,
					"top": alto
				},"slow",function(){
					jQuery(".cuadro").animate({
						"width":"200px",
						"height":"200px",
						"background-color": "red",
						"top" : 0,
						"left" : 0
					},function(){
						//repetir();
					})
				})
			})
			//alert("listo");
		}
	)
}