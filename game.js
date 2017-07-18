$(document).ready(function() {
	//creates some global variables for use

	var counter = 0;
	var wins = 0;
	var losses = 0;
	var crystalMax = 10;
	var max=100;


	//links and writes out the variables below
	$('#win').text(wins);
	$('#loss').text(losses);
	//creates an aray with the value to images 
	images = ['assets/ruby.png','assets/saphire.png','assets/dimond.png','assets/emerald.png'];

	//our two number generators on for the computer's guess and one for the crystals values
	function magicGenerator (){
		var random = Math.floor(Math.random() * (max+ 1));
		return random;
	}
	function crystalNumber (){
		var random = Math.floor(Math.random() * (crystalMax));
		return random;
	}
	var test1 = magicGenerator();
	var test2 = crystalNumber();
	console.log(test1 + " " + test2)
	//this function will exist in the Crystal Generator to check if the value has been used

	//this will create the the cryistals to materialize on the page
	function crystalGenerator() {
		var values = [];
			while(values.length <4){
				var value = Math.ceil(Math.random()*12)
				var found = false;
				for (var i = values.length - 1; i >= 0; i--) {
					if (values[i] === value){
						found =true
					}
				}
		  	if(!found)values[values.length]=value;
			}
		console.log(values);
		for (var i = 0; i < values.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-number', value[i]);
			imageCrystal.attr('src', images[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage');
			$('#crystalHolder').append(imageCrystal);
		}

	}
	crystalGenerator();
});

