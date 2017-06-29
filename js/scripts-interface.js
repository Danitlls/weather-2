var Weather = require('./../js/scripts.js').weatherModule;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    var newWeather = new Weather();
    newWeather.getValue(city);
    $('#location').val("");
    $('.showWeather').text();
  });
});
