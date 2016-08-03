function populateList() {
	var planetArray = [
		{name:"Sun", value: 27.9}, 
		{name:"Mercury", value: 0.377}, 
		{name:"Venus", value: 0.9032}, 
		{name:"Earth", value: 1}, 
		{name:"Moon", value: 0.1655}, 
		{name:"Mars", value: 0.3895}, 
		{name:"Jupiter", value: 2.640}, 
		{name:"Saturn", value: 1.139}, 
		{name:"Uranus", value: 0.917}, 
		{name:"Neptune", value: 1.148}, 
		{name:"Pluto", value: 0.06}];
	var select = document.getElementById("planet");

	for (var i = 0; i < planetArray.length; i++) {
		var opt = document.createElement("option");
		opt.innerHTML += planetArray[i].name;
		opt.value = planetArray[i].value;

		select.appendChild(opt);
	}

	

}
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