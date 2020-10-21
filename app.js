const apiKey = require('./appConfig.js')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key='+ apiKey.weatherStackToken +'&query=Hong%20Kong'

// // console.log(url)
// request({url: url, json: true}, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.

// //   const data = JSON.parse(body)
// //   console.log(body.current)
// //   console.log(body.current.temperature)
// //   console.log(body.current.feelslike)

//   console.log(body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature +" degrees out. It feels like "+ body.current.feelslike + " degrees out")
// });


// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/2345hkf%20.json?access_token='+ apiKey.mapBoxToken +'&limit=1'

// request({url: geoCodeUrl, json: true}, function (error, response, body) {
    
//     if (error){
//         console.log('Unable to connect to mapbox')
//     } else if(body.features.length==0){
//         console.log('Unable to find location. Try another search')
//     } else {
//         const longtitude =  body.features[0].center[0]
//         const latitude = body.features[0].center[1]
//         console.log(latitude, longtitude)
//     }
// });

geocode('muar', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})