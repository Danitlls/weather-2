var ExampleModule = require('./../js/scripts.js').exampleModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var obj;

  $("#dinoButton").click(function() {
    var manufacturer = $(".brand").val();

    $.get(apiKey + manufacturer + "&location=IP").then(function(response) {
      // $('#some-awesome-container').text(response.bikes[1]);
      obj = response;

      for (i = 0 ; i <= 20 ; i++){
        $("#some-awesome-container").append("<li>" +
         response.bikes[i].manufacturer_name + " <br> " +
         response.bikes[i].frame_model + " <br> " + response.bikes[i].stolen_location + "<img class='photo-" + i + "' src='" + response.bikes[i].large_img + "'></img>" + "</li>");
         if (response.bikes[i].large_img === null) {
           $(".photo-"+ i).css("display", "none");
          //  console.log(response.bikes[i].large_img)
         }
      };
      console.log(obj.bikes);
    });
  });
});





// DINO IPSUM //
// $(document).ready(function() {
//   $("#dinoButton").click(function() {
//     var key1 = "paragraphs";
//     var val1 = $(".paragraphs").val();
//     var wordsInput = $(".words").val();
//
//     $.get("http://dinoipsum.herokuapp.com/api/?format=html&"+ key1 + "=" + val1 + "&words=" + wordsInput).then(function(text){
//       $('#some-awesome-container').html(text);
//       console.log(text);
//     });
//   });
// });

// $(document).ready(function() {
//   $("#dinoButton").click(function() {
//     var parInput = $(".paragraphs").val();
//     var wordsInput = $(".words").val();
//
//       var getDinos = $.get("http://dinoipsum.herokuapp.com/api/?format=html&" + "paragraphs=" + parInput + "&words=" + wordsInput),
//
//       fillContainer = function(text) {
//         $('#some-awesome-container').html(text);
//           console.log(text);
//         };
//       // console.log(getDinos);
//       getDinos.then(fillContainer);
//
//     })
// });







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
