
const geocode = require('./geocode/geocode');

geocode.geocodeAddress('474 Marseille Dr. Placentia Ca 92870', (error, result) => {
	if( error ) {
		console.log( error );
	}
	else{
		console.log(result);
	}
});

