const request = require('request');

let geocodeAddress = ( address, callback ) => {
	const encodeAddress = encodeURIComponent(address);
	
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
		json: true
	}, function(error, response, body){
	
		if( error ){
			//console.log('unable to connect');
			callback('unable to connect');
		}
		else if( body.status === 'ZERO_RESULT'){
			callback('no result');
		}
		else if( body.status === 'OK'){
			const result = body.results[0];
			callback(null, {
				address: result.formatted_address,
				lat: result.geometry.location.lat,
				lng: result.geometry.location.lng
			})
			console.log( result.geometry.location );
			//https://api.darksky.net/forecast/e2481e446b2395eac32f9659e5b54f1d/37.8267,-122.4233
			//console.log( JSON.stringify(response, undefined, 2) );
		}
		
	
		
	})



}


module.exports.geocodeAddress = geocodeAddress;