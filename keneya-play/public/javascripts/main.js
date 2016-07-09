

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.6125547, lng: -8.1356026},
    scrollwheel: false,
    zoom: 5 }); 
}; 
initMap();

$("#fr").click(function(){
	$.get( "/french", function( data ) {
	});
});

$("#ba").click(function(){
	$.get( "/bambara", function( data ) {
		});	
});

