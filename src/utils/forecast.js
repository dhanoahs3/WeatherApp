const request = require('request')


const forecast = (latitude,longitude,callback) =>{
   const url  = 'http://api.weatherstack.com/current?access_key=68dfcc657e197d867b5f17211d98742e&query='+latitude+','+longitude+'&units=m'
   request({url,json:true},(error,{body})=>{
     if(error){
      callback('Unable to connect to weatherstack api',undefined)
    }
     else if(body.error){
       callback('Please provide a valid location',undefined)
    }
    else{
      callback(undefined,body.current.weather_descriptions[0]+'. The current weather for today is '+body.current.temperature+'. And it feels like '+body.current.feelslike)
     }
})
}

module.exports = forecast
