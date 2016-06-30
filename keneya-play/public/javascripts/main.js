

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.6125547, lng: -8.1356026},
    scrollwheel: false,
    zoom: 5 }); 
}; 
initMap();

//$("#join").click(function(){
//	
//	 $.get( "/login", function( data ) {
//		  
//		  
//		});
//
//});

function initLanguages(){
	var language = document.getElementById("dropdown");
	var test = {English:["Home", "Join", "About us", "Contact us", "Search"],
			    French:["Acceuil", "Joindre", "A propos", "Nous contacter", "Recherche"],
			    Bambara:["Bissimilah", "I togo Do", "Anw", "Seben Chi", "Yinini ke yan"]
	}

    $("#en").click(function () {
	document.getElementById("dropdown").textContent = "Select a language";
	document.getElementById("home").textContent = test.English[0];
	document.getElementById("join").textContent = test.English[1];
	document.getElementById("aboutus").textContent = test.English[2];
	document.getElementById("contactus").textContent = test.English[3];
	document.getElementById("search").textContent = test.English[4];
});
    $("#fr").click(function(){
    	document.getElementById("dropdown").textContent = "Choisir une langue";
		document.getElementById("home").textContent = test.French[0];
		document.getElementById("join").textContent = test.French[1];
		document.getElementById("aboutus").textContent = test.French[2];
		document.getElementById("contactus").textContent = test.French[3];
		document.getElementById("search").textContent = test.French[4];
    	
    });
      
    
$("#ba").click(function (){
	document.getElementById("dropdown").textContent = "Khan kelen soguin";
	document.getElementById("home").textContent = test.Bambara[0];
	document.getElementById("join").textContent = test.Bambara[1];
	document.getElementById("aboutus").textContent = test.Bambara[2];
	document.getElementById("contactus").textContent = test.Bambara[3];
	document.getElementById("search").textContent = test.Bambara[4];
    	
    });
      
}initLanguages();

 
    
//function changeText(){
////	change the text in the language selector drop-down menu
//	var language = document.getElementById("dropdown");
//	var languages = ["Language", "Langue", "Kàn"];
//	for (var i=0; i < languages.length; i+=1){
//		if(languages.length !==null){
//			return setInterval(function(){language.textContent = languages[i];}, 1000);
//		}
//	}
//}changeText();


