const apiKey = require('./appConfig.js')
const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key='+ apiKey.weatherStackAPI +'&query=Hong%20Kong'

console.log(url)
request({url: url, json: true}, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

//   const data = JSON.parse(body)
//   console.log(body.current)
//   console.log(body.current.temperature)
//   console.log(body.current.feelslike)

  console.log(body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature +" degrees out. It feels like "+ body.current.feelslike + " degrees out")
});