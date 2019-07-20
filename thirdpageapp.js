var language = localStorage.getItem('lan' );
var landing_center = localStorage.getItem('landingsite' );
var landingcenter_state = localStorage.getItem('landingsitestate' );
var landingcenter_district = localStorage.getItem('landingsitedistrict' );
var lang = ""
if(language === '0'){
  console.log(language)
  fetch("./IN-EN.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("forecaste").innerText = data.Forecast_OSF_Title;
  document.getElementById("sites").innerText = data.Footer_Button_Sites;
  document.getElementById("play").innerText = data.Footer_Button_Play;
  document.getElementById("call").innerText = data.Footer_Button_Call;
  document.getElementById("secondRowForCurrent").innerText = data.Forecast_Component_Current;
  document.getElementById("secondRowForWave").innerText = data.Forecast_Component_Wave;
  document.getElementById("secondRowForWind").innerText = data.Forecast_Component_Wind;
  localStorage.setItem('play',data.Footer_Button_Play);
  localStorage.setItem('pause',data.Footer_Button_Pause);
    lang = "English"
});
}
else if(language === '1'){
   lang = "telugu" 
  console.log("hello telugu");
  fetch("./IN-TE.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("forecaste").innerText = data.Forecast_OSF_Title;
  document.getElementById("sites").innerText = data.Footer_Button_Sites;
  document.getElementById("play").innerText = data.Footer_Button_Play;
  document.getElementById("call").innerText = data.Footer_Button_Call;
  document.getElementById("secondRowForCurrent").innerText = data.Forecast_Component_Current;
  document.getElementById("secondRowForWave").innerText = data.Forecast_Component_Wave;
  document.getElementById("secondRowForWind").innerText = data.Forecast_Component_Wind;
  localStorage.setItem('play',data.Footer_Button_Play);
  localStorage.setItem('pause',data.Footer_Button_Pause);
  
});
}
else if(language === '2'){
   lang = "tamil"
  fetch("./IN-TA.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("forecaste").innerText = data.Forecast_OSF_Title;
  document.getElementById("sites").innerText = data.Footer_Button_Sites;
  document.getElementById("play").innerText = data.Footer_Button_Play;
  document.getElementById("call").innerText = data.Footer_Button_Call;
  document.getElementById("secondRowForCurrent").innerText = data.Forecast_Component_Current;
  document.getElementById("secondRowForWave").innerText = data.Forecast_Component_Wave;
  document.getElementById("secondRowForWind").innerText = data.Forecast_Component_Wind;
  localStorage.setItem('play',data.Footer_Button_Play);
  localStorage.setItem('pause',data.Footer_Button_Pause);
   
});
}
else{

}







var event = 0;
var dev =0 ;
var text = false;
var language,state,fishingSiteName1,landing_center,district;
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
fishingSiteName1 = queries[2]  
state = queries[3];
landing_center_1 = queries[4];
district = queries[5]  

}
console.log(`${fishingSiteName1} ${state} ${landing_center} ${district} ${lang}`);


var request = new XMLHttpRequest();

request.open('POST',  'http://guru.southindia.cloudapp.azure.com:8051/query/get/response/', true);
console.log("hey i passed 1");
request.setRequestHeader("Content-type", "application/json");
const params = {
  "user_id":"5cf139a5f8218a5322a41f57",
"language":lang ,
  "location": {"state": landingcenter_state, "district": landingcenter_district, "landing_centre": landing_center},
    "template_name": "ocean_state_forecast_template",
"selected_keywords": []
               }

request.send(JSON.stringify(params));
request.onload = function () { 
  console.log("i am loading")
  document.getElementById("siteIndex").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("topphase").style.display = "block";
  
  var json_data = JSON.parse(this.response);
  console.log("the wave direction is "+json_data.data[0].wave_direction);
//  console.log( json_data.data[0].max_current_speed_kmph+"-"+ json_data.data[0].min_current_speed_kmph+"kmph");
  // console.log(json_data.data[0].max_wave_height_ft+"-"+json_data.data[0].min_wave_height_ft+"ft");
  document.getElementById("fishingSiteName").innerText = json_data.data[0].landing_centre_regional;
document.getElementById("myaudio").src = json_data.audio;
  document.getElementById("para").textContent = json_data.text;
  document.getElementById("thirdRowForCurrent").textContent = `${json_data.data[0].max_current_speed_kmph}-${json_data.data[0].min_current_speed_kmph}kmph`;
document.getElementById("fourthRowForCurrent").textContent = json_data.data[0].current_direction;
document.getElementById("thirdRowForWave").textContent = json_data.data[0].max_wave_height_feet+"-"+json_data.data[0].min_wave_height_feet+"ft";
document.getElementById("fourthRowForWave").textContent = json_data.data[0].wave_direction;
document.getElementById("thirdRowForWind").textContent = json_data.data[0].max_wind_speed_kmph+"-"+json_data.data[0].min_wind_speed_kmph+"kmph";
document.getElementById("fourthRowForWind").textContent = json_data.data[0].wind_direction;
console.log( json_data.data[0].max_current_speed_kmph+"-"+ json_data.data[0].min_current_speed_kmph+"kmph");
document.getElementById("date").textContent = json_data.data[0].date;
if(json_data.data[0].flag === "High Waves Alert" || json_data.data[0].flag === "Caution"){
  document.getElementById("wrapper").style.backgroundColor = '#f2a71a';
  //document.getElementById("fishingSiteName").style.backgroundColor = '#f49521';
  document.getElementById("indi").textContent = json_data.data[0].flag_regional;
  document.getElementById("img").src = "/assets/Caution small.png"
}
else if(json_data.data[0].flag === "safe"){
  document.getElementById("wrapper").style.backgroundColor = ' #039073';
  document.getElementById("indi").textContent = json_data.data[0].flag_regional;
  document.getElementById("img").src = "/assets/Safe small white.png";
}
else{
  document.getElementById("wrapper").style.backgroundColor = '#eb1a1a';
  document.getElementById("indi").textContent = json_data.data[0].flag_regional;
  document.getElementById("img").src = "/assets/Danger small.png";
}
}






var firstItem = document.getElementById("option1");
var secondItem = document.getElementById("option2");
var thirdItem = document.getElementById("option3");
var fourthItem = document.getElementById("option4");
var currentItem = null;
var previousItem = null;
var nextItem = null;

var audio = document.getElementById("myaudio");
/**
 * this function is handling the evnts of the softkeys
 */

const softkeyCallback = {
  left: function() {
    var fishingsitename = document.getElementById("siteIndex");
    console.log(fishingsitename)
    console.log("Show sites");
    var queryString = "?para1=" + 1 + "&para2=&" + fishingsitename.textContent;
    window.location.href = "fishingpointscreen.html" + queryString;
  },
  center: function(button) {
    var queryString = "?para1=" + button;
    window.location.href = "thirdpage.html" + queryString;
  },

  
};

/**
 * evnt listener for the hardware keys pressed
 * 
 */
window.addEventListener("keydown", evt => {
  console.log("hello i am key  listener");
  switch(evt.key) {
    case "Enter":
      console.log("hello i am audio");
      playingaudio(); 
      break;       
    case "SoftRight":
      console.log("hey i am here");
      window.open('tel:18004198800');
      break;         
    case "SoftLeft":
      console.log("i am here");
      softkeyCallback.left();
      break;
      case "ArrowUp":

      
      if(text === true){
        console.log(text);
        document.getElementById("myDiv1").style.display = "none";  
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("topphase").style.display = "block";
        text =false;
     }
     else{
      document.getElementById("myDiv").style.display = "none";
      document.getElementById("topphase").style.display = "block";
      document.getElementById("myDiv1").style.display = "block";
      text = true;}
      break;     
    case "1":
      event++;
      if(event === 2){
        localStorage.setItem('islogin', 0);
        window.location.href = "index.html"
      }
      break;
      case "w":
      event++;
      if(event === 2){
        localStorage.setItem('islogin', 0);
        window.location.href = "index.html"
      }
      break;  
    case "5":
      dev++;
      if(dev === 5){
        localStorage.setItem('islogin', 0);
        confirm("you have found amits secret logout");
        window.location.href = "index.html"
      }
      break;            
    default:
      console.log("you press soft key: " + evt.key);
      break;
  }
});


function playingaudio() {
  var audiobutton = document.getElementById("audio");
  var audio = document.getElementById("myaudio");
  var play = document.getElementById("play");
  console.log(play.textContent);
  if (play.textContent === localStorage.getItem("play")) {
    console.log("hello");
    document.getElementById("playimg").src = "/assets/pause with shadow.png";
    //audiobutton.style.backgroundColor = "red";
    audio.play();
    play.innerHTML = localStorage.getItem("pause");
  }
  else if (play.textContent === localStorage.getItem("pause")) {
    //audiobutton.style.backgroundColor = "black";
    document.getElementById("playimg").src = "/assets/play-white.png";
    audio.pause();
    play.innerHTML = localStorage.getItem("play");
  }
  return audio;
}

function onLoadFunction() {
  
  var text = "";

  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("siteIndex").innerHTML = 3;
  var urlParams = new URLSearchParams(window.location.search);
  var selectedObjectIndex = urlParams.get("?para1");
  var fishingSiteName = urlParams.get("fishingSiteName");
  document.getElementById("siteIndex").innerHTML =
    parseInt(selectedObjectIndex) + 1;
  document.getElementById("fishingSiteName").innerHTML = fishingSiteName;
}
