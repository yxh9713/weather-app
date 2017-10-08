
const geocode = require('./geocode/geocode-promise');
const weather = require('./weather/weather-promise');

geocode('474 Marseille Dr. Placentia Ca 92870')
.then( (resolve) => {
	return weather(resolve.lat, resolve.lng);
})
.then( (resolve) =>{
	console.log('weahter ',resolve);
})
.catch( (error) => {
	console.log('error inside ',error);
} );


// const geocode = require('./geocode/geocode');

// geocode.geocodeAddress('474 Marseille Dr. Placentia Ca 92870', (error, result) => {
// 	if( error ) {
// 		console.log( error );
// 	}
// 	else{
// 		console.log(result);
// 	}
// });

