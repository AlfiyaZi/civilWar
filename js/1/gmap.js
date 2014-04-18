var airPort=new google.maps.LatLng(42.369543,-71.020061);
var hotelOasis=new google.maps.LatLng(42.338372,-71.103269);
var markAirport;
var markHotelOasis;
var LatLng = new google.maps.LatLng(42.338372,-71.103269); 

function initialize()
{

		if (jQuery(window).width() < 480)
		{
	        var mapOptions =
	        {
	  	          center: new google.maps.LatLng(42.359242,-71.085498),
	  	          zoom: 11,
	  	          mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	          mapTypeControl: true,
	  	          disableDefaultUI: false,
	  	          scrollwheel: false,
	  	          draggable: false,
	  	    };
			
			var airPortImage =
			{
				url: 'http://jwc.redcomponent.com/images/gmap/amap-smartphone.png',
				size: new google.maps.Size(50, 75),
			};
			
			var hotelOasisImage =
			{
			  url: 'http://jwc.redcomponent.com/images/gmap/hmap-smartphone.png',
			  size: new google.maps.Size(200, 120),
			};
		}
		else if (jQuery(window).width() < 1280)
		{
			   var mapOptions =
			   {
		          center: new google.maps.LatLng(42.359242,-71.085498),
		          zoom: 11,
		          mapTypeId: google.maps.MapTypeId.ROADMAP,
		          mapTypeControl: true,
		          disableDefaultUI: false,
		          scrollwheel: false,
		          draggable: false,
		        };
					
				var airPortImage =
				{
						url: 'http://jwc.redcomponent.com/images/gmap/amap-smartphone.png',
						size: new google.maps.Size(50, 75),
				};
				
				var hotelOasisImage =
				{
				  url: 'http://jwc.redcomponent.com/images/gmap/hmap-smartphone.png',
				  size: new google.maps.Size(200, 120),
				};
		}
		else
		{
	    	var mapOptions =
	    	{
				center: new google.maps.LatLng(42.359372,-71.103269),
	  	          zoom: 13,
	  	          mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	          mapTypeControl: true,
	  	          disableDefaultUI: false,
	  	          scrollwheel: false,
	  	          draggable: true,
	  	    };
				
			var airPortImage =
			{
				url: 'http://jwc.redcomponent.com/images/gmap/amap.png',
				size: new google.maps.Size(164, 245),
			};
			
			var hotelOasisImage =
			{
			  url: 'http://jwc.redcomponent.com/images/gmap/hmap.png',
			  size: new google.maps.Size(538, 322),
			};
		}

	
	google.maps.event.addDomListener(window, 'resize', function()
	{
		map.setCenter(LatLng);
	});
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
    markAirport = new google.maps.Marker(
    {
        position:airPort,
        map: map,
        icon: airPortImage,
    });
        
    markAirport.setMap(map);
        
    markHotelOasis = new google.maps.Marker(
    {
        position:hotelOasis,
        map: map,
        icon: hotelOasisImage,
    });
        
    markHotelOasis.setMap(map);
	
	var styles = [
	{
	    stylers: [
		{
			hue: "#000"
		},
		{
			saturation: -100
		}
	      ]
	    },
	    {
	      featureType: "all",
	      elementType: "geometry",
	      stylers: [
		{ lightness: 5 },
		{ visibility: "simplified" }
	      ]
	    },
	    {
	      featureType: "road",
	      stylers: [
		{ visibility: "simplified" },
		{ hue: "#000" },
		{ lightness: 0 },
		{ saturation: 0 },
	      ]
	    }
	  ];
	
map.setOptions({styles: styles});


}