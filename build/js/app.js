(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//business logic stuff for a particular module
var ExampleModule = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

ExampleModule.prototype.examplePrototype = function() {
  return `this is an example prototype method`;
};

exports.exampleModule = ExampleModule;

},{}],2:[function(require,module,exports){
var ExampleModule = require('./../js/scripts.js').exampleModule;


$(document).ready(function() {
  var parInput = $(".paragraphs").val();
  var wordsInput = $(".words").val();
  // var parInput = 355;
  // var wordsInput = 4;

    $("#dinoButton").click(function() {
      var getDinos = $.get("http://dinoipsum.herokuapp.com/api/?format=html&" + "paragraphs=" + parInput + "&words=" + wordsInput),

        fillContainer = function(html) {
          $('#some-awesome-container').html(html);
        }
        getDinos.then(fillContainer);
    })
});


// var parInput = .val();
// var wordsInput = 2;
// var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15'),


// weather thing API //
// var apiKey = "4280a03a193bb5dc2f29b3fb3bc25f35";
//
// $(document).ready(function() {
//   $('#weather-location').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     $('.showWeather').text("The city you have chosen is " + city + ".");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//      $('.showTemp').text("The temperature in " + city + " is " + response.main.temp + " kelvin");
//     });
//   });
// });

},{"./../js/scripts.js":1}]},{},[2]);
