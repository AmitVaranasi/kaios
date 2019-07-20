
window.addEventListener("offline", function(e) {
  alert("you r offline")
});
var lat;
var lon;
var options = {
  
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

console.log(options);
function success(pos) {
  console.log("i am sucess");
  var crd = pos.coords;
 console.log(crd);
//document.getElementById("para").innerHTML = `Latitude : ${crd.latitude}
//Longitude : ${crd.longitude}`;
//document.getElementById("para").innerHTML = `Longitude : ${crd.longitude}`;
  
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  makerequest(crd.latitude,crd.longitude);
}

function error(err) {
  console.log("i am error");
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);




   var name = localStorage.getItem('name');
   var occupation = localStorage.getItem('occupation');
   var language = localStorage.getItem('language');
   var number = localStorage.getItem('number');
   var landing_site = localStorage.getItem('landingsite');
   console.log(`${name} ${occupation} ${language} ${number} ${landing_site} ${lat} ${lon}`);

function makerequest(lat,lon){
  
  var request = new XMLHttpRequest();

request.open('POST',  'http://guru.southindia.cloudapp.azure.com:8001/users/create/', true);
console.log("hey i passed 1");
request.setRequestHeader("Content-type", "application/json");
const params ={
        "name":name,
    "phone":number,
    "gender":"MALE",
        "location": {
            "locations_service_id": "",
            "state": "",
            "district": "",
            "place": "",
            "pin_code": "",
            "address": "",
            "latitude": lat,
            "longitude": lon
        },
        "languages_known": language,
        "landing_centres": [
            {
                "lc_ID":landing_site,
                "address": ""
            }
        ]
    }
request.send(JSON.stringify(params));
request.onload = function () { 
   document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  var json_data = JSON.parse(this.response);
  console.log(json_data);
document.getElementById("title").innerText = "Registration Success!!!";
}
  
}    

    
   

function handleKeyDown(evt) {
  switch (evt.key) {
    case "Enter":
      var queryString =
      "?para1=" +
      localStorage.getItem('landingsiteindex')+
      "&fishingSiteName=&" +
      localStorage.getItem('landingsite' )+"&"+localStorage.getItem('landingsitestate')+"&"+localStorage.getItem('landingsitelanguage');
    console.log("Number : " + queryString);
      console.log(`${localStorage.getItem('landingsiteindex')} ${ localStorage.getItem('landingsite' )} ${localStorage.getItem('landingsitestate')}`)
   window.location.href = "thirdpage.html" + queryString;
      break;
  // this is calls the number function which inturn writes the text into the textfield    
    default:
      //softkeyCallback.number(evt.key);
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);