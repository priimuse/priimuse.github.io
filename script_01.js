console.log("Hi World!");

//wit.ai functionality
/*
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
*/

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //document.getElementById("demo").innerHTML = xhttp.responseText;
      console.log(xhttp.responseText.ranNum());
    }
  };
  xhttp.open("GET", "script_02.js", true);
  xhttp.send();
}

loadDoc();
