var apiKey = require('./../.env').apiKey;

// THIS IS OUR WEATHER CONSTRUCTOR //
var Weather = function(city) {
  this.city = city;
}

// THIS IS OUR PROTOTYPE //
Weather.prototype.getValue = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
    console.log(response);
    $('.showWeather').text(city + " " + response.main.humidity);
    $('.showTemp').text(city + " " + response.main.temp);
  });
};

exports.weatherModule = Weather;












// //business logic stuff for a particular module
// var ExampleModule = function(args) {
//   this.args = args; //to be replaced with constructor arguments
// };
//
// ExampleModule.prototype.examplePrototype = function() {
//   return `this is an example prototype method`;
// };
//
// exports.exampleModule = ExampleModule;
