var markers = [
  {nombre:'Jockey Plaza',latitud: -12.085632, longitud: -76.976738},
  {nombre:'Plaza San Miguel',latitud: -12.076959,longitud: -77.082794},
  {nombre:'Emilio Cavenecia',latitud: -12.108501,longitud:-77.038273},
  {nombre:'Real Plaza Salaverry',latitud: -12.089979,longitud: -77.051843},
  {nombre:'Mall Aventura Plaza Trujillo',latitud: -8.102622,longitud:-79.049508},
  {nombre:'Real Plaza Piura',latitud: -5.186347,longitud: -80.642678},
  {nombre:'Real Plaza Arequipa',latitud: -16.389631,longitud: -71.549752},
  {nombre:'Real Plaza Cusco',latitud: -13.523288,longitud: -71.949472}
];

jQuery(document).ready(function(){
	cargarlista();
	ubicacion();
});

jQuery(document).on("change","#tiendas",function(){
		var indice = jQuery(this).val();
		if(indice)
		{
			var lat = jQuery("#tiendas").find("option").eq(indice).attr("data-lat");
			var lon = jQuery("#tiendas").find("option").eq(indice).attr("data-lon");
			mapa(lat,lon);
		}
});



function cargarlista()
{
	jQuery.each(markers,function(i,e){
		var indice = i + 1;
		var html = '<option value="'+indice+'" data-lat="'+e.latitud+'" data-lon="'+e.longitud+'">'+e.nombre+'</option>';
		jQuery("#tiendas").append(html);
	});
}


function ubicacion()
{
	if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position){
 			mapa(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function mapa(lat,lon)
{	
	var colores = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];



	var myCenter = new google.maps.LatLng(lat,lon);
	
	var mapProp = {
	    center: myCenter,
	    zoom: 16,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("mimapa"), mapProp);

    var estilo = new google.maps.StyledMapType(colores);
    map.mapTypes.set('mapa-bn', estilo);
    map.setMapTypeId('mapa-bn');

	var marker = new google.maps.Marker({
		position: myCenter,
		map: map,
		//icon: "url"
	});


	marker.setMap(map);
 }
