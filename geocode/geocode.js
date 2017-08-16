const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve,reject)=>{

    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json:true
    },(error, response, body) => {
      if(!error && response.statusCode == 200){
        if(body.status === 'OK'){
          resolve({
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
          });
        }else if(body.status == 'ZERO_RESULTS'){
          reject('No result found');
        }
      }else{
        reject('Somthing wrong!');
      }
    })

  })

}

module.exports.geocodeAddress = geocodeAddress;
