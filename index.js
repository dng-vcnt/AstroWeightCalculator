function calculateWeight() {
	var userWeight;
	var planet;
	var planetValue;
	var planetSelected;
	var newWeight;

	// Get user's weight
	userWeight = document.getElementById("userInput").value;
	
	// Get gravitational value of planets
	planet = document.getElementById("planet");
	planetSelected = planet.options[planet.selectedIndex];
	planetValue = planetSelected.value;


	// Calculate user's weight on different planet
	newWeight = userWeight * planetValue;

	// Print out message
	document.getElementById("weightMessage").innerHTML = 
		"If you were on " + planetSelected.text + 
		", you would weigh " + parseInt(newWeight) + "lbs!";

}