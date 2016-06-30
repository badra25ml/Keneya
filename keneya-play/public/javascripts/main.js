function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.6125547, lng: -8.1356026},
    scrollwheel: false,
    zoom: 5 }); 
}; 
initMap();

function changeText(){
//	change the text in the language selector drop-down menu
	var language = document.getElementById("dropdown");
	var languages = ["Language", "Langue", "Kàn"];
	for (var i=0; i < languages.length; i+=1){
		if(languages.length !==null){
			return setInterval(function(){language.textContent = languages[i];}, 1000);
		}
	}
}changeText();


