const apiKey = require('../appConfig.js')
const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+ apiKey.weatherStackToken +'&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude)

    request({url: url, json: true}, function (error, response) {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if(response.body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            // console.log(response.body.location.name)
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently "+ response.body.current.temperature +" degrees out. It feels like "+ response.body.current.feelslike + " degrees out")
        }
    })
}

module.exports = forecast