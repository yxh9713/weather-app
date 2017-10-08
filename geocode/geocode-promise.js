const request = require('request');

const geocodeAddress = ( address ) =>{

	const encodeAddress = encodeURIComponent(address);

	return new Promise( ( resolve, reject) =>{
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
			json: true
		}, function(error, response, body){
			if( error ){
				reject('unable to connect');
			}
			else if( body.status === 'ZERO_RESULT'){
				reject('no result');
			}
			else if( body.status === 'OK'){
				const result = body.results[0];
				resolve({
					address: result.formatted_address,
					lat: result.geometry.location.lat,
					lng: result.geometry.location.lng
				})

				//https://api.darksky.net/forecast/e2481e446b2395eac32f9659e5b54f1d/37.8267,-122.4233
				//console.log( JSON.stringify(response, undefined, 2) );
			}
		})
	});
}

module.exports = geocodeAddress; 
