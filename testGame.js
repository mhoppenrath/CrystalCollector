// java is the last to initalize on the page
//initalizing global variables that will be used throughout.
	var min = 0;
	var magicMax = 100;
	var crystalMax=10;
	var yourScore=0
	var wins=0;
	var losses=0;
	var images = ['assets/dimond.png', 'assets/emerald.png', 'assets/ruby.png', 'assets/saphire.png'];


	// this function is to generate the magic number
	function magicGenerator (){
		var random = Math.floor(Math.random() * (magicMax - min + 1) + min);
		return random;
	}

	//This is to make the first Magic number
	var magicNumber = magicGenerator();
	console.log(magicNumber)


	//function Creates the value of the crystal Values
	function crystalGenerator (){
		var random = math.floor(math.random() * (crystalMax - min) + min);
		return random;
	}

	// creates a function that creates images as objects
	var createImage = function(link) {
  		var imageCrystal   = $("<img>");
  		imageCrystal.addClass("gem");
  		imageCrystal.attr("src", link);
  		var meth = crystalGenerator
  		imageCrystal.attr("value", meth)
  		console.log(imageCrystal.src);
  		console.log(imageCrystal.item);
  		$("#crystalHolder").append(imageCrystal);
  	};

	function doubleTrouble(checker) {
		if (values.indexof[checker] != -1) {
		console.log(checker);
		return checker;
		}
	}
  	$(".gem").on("click", function() {
  		yourScore = yourScore + parseInt($(this).value('num'))
  		if (yourScore === magicNumber) {
  			wins ++;
  			yourScore = 0;
  			//crystals empty
  		}
  		else if ( yourScore > magicGenerator){
  			losses ++;
  			yourScore = 0;
  			//empy cristal
  		}
  	})
	//the specific images


	//this populates the crystalHolder row with 4 seperate images



