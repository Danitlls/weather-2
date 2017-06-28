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
