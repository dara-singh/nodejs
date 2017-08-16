const request = require('request');
const argv = require('yargs').argv;

const geocode = require('./geocode/geocode');
const getweather = require('./getweather/getweather');

let address = encodeURIComponent(argv.address);

geocode.geocodeAddress(address).then((address)=>{
	console.log(address.address);
	return getweather.getweatherDetails(address.latitude,address.longitude);
}).then((weather)=>{
	console.log(weather);
}).catch((errorMessage)=>{
	console.log(errorMessage);
})
