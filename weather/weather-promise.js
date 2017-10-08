const request = require('request');

const getWeather = ( lat, lng ) =>{

	return new Promise( ( resolve, reject) =>{
		request({
			url: `https://api.darksky.net/forecast/e2481e446b2395eac32f9659e5b54f1d/${lat},${lng}`,
			json: true
		}, (error, response, body) => {
			if( error || !body || body == 'Forbidden') {
				reject('there is an error');
			}
			else{
				resolve(body.currently);
			}
		});
	});
}

module.exports = getWeather; 
