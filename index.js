module.exports = function(destinations) {
	if (!destinations || !Array.isArray(destinations)) {
		return "Wrong input!";
	}

	let finalizedTrip = [];

	function isString(destination) {
		return typeof destination === "string";
	}
	
	function addDestinationToIndex(firstDestination, secondDestination) {
		const indexofFirstDestination = finalizedTrip.indexOf(firstDestination);
		finalizedTrip.splice(indexofFirstDestination, 0, secondDestination);
	}
	
	function addDestinationToTrip(destination) {
		if (isString(destination) && !finalizedTrip.includes(destination)) {
			finalizedTrip.push(destination);
		}
	}

	destinations.forEach(destination => {
		if (!isString(destination)) {
			return;
		}

		if (destination.includes("=>")) {
			const firstDestination = destination.split(" => ")[0];
			const secondDestination = destination.split(" => ")[1];
			if (finalizedTrip.includes(firstDestination) && !finalizedTrip.includes(secondDestination)) {
				addDestinationToIndex(firstDestination, secondDestination);
			} else {
				addDestinationToTrip(secondDestination);
				addDestinationToTrip(firstDestination);
			}
		} else {
			addDestinationToTrip(destination);
		}	
	});

	return finalizedTrip;
}