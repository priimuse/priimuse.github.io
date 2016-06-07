console.log("Hi World!");

//wit.ai functionality
var $;
var server_token = "5RZS53RK4KKUSQ2MBL3JFLLSXTPWFHS3";

$.ajax({
  url: 'https://api.wit.ai/message',
  data: {
    'q': 'set an alarm in 10min',
    'access_token' : server_token
  },
  dataType: 'jsonp',
  method: 'GET',
  success: function(response) {
      console.log("success!", response);
  }
});
