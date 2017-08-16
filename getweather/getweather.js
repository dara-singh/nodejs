const request = require('request');

var getweatherDetails = function(lat,lng){
  return new Promise((resolve,reject)=>{
    request({
      url:`https://api.darksky.net/forecast/b19f299a460c2440a2f0a202809b038a/${lat},${lng}`,
      json:true
    },(error,response,body)=>{
      if(!error && response.statusCode === 200){
        resolve(body.currently.summary);
      }else if(response.statusCode === 400){
        reject('Something Wrong');
      }else{
        reject('Some error');
      }
    })
  })
}

module.exports.getweatherDetails = getweatherDetails;
