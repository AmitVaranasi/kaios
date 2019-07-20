var language = localStorage.getItem('lan' );
var lang = ""
if(language === '0'){
  console.log(language)
  fetch("./IN-EN.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("title").innerText = data.Fishing_Sites_Title;
  
});
}
else if(language === '1'){
  lang = "telugu"
  console.log("hello telugu");
  fetch("./IN-TE.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("title").innerText = data.Fishing_Sites_Title;
});
}
else if(language === '2'){
  lang = "tamil"
  fetch("./IN-TA.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("title").innerText = data.Fishing_Sites_Title;
});}
else{

}



localStorage.setItem('islogin', 1);

window.addEventListener("offline", function(e) {
  alert("you r offline")
});

/**
 * this cunk of code if used when we choose sites from 
 * the forecaste page
 *  */
var firstItem,secondItem,thirdItem,fourthItem,fifthItem,sixthItem,seventhItem;
var indicator = 0;
var indicator1 = 0;
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
if(queries.length>1){
  for (var i = 0; i < queries.length; i++)
{
  
indicator = queries[0] ;
indicator1 = queries[2]
console.log(indicator1);
}

}



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




var j =0;
var size =0;


function makerequest(lat,lon) {
  console.log(lat+" "+lon+" "+lang);
  var request = new XMLHttpRequest();
  request.open('POST', 'http://guru.southindia.cloudapp.azure.com:8055/engine/get_nearest_landing_centres/', true);
  request.setRequestHeader("Content-type", "application/json");
  const params = {
  "latitude": lat,
    "longitude": lon,
    "language":lang
  };
  request.send(JSON.stringify(params));
  request.onload = function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    var json = JSON.parse(this.response);
    //console.log(json)
    test(json);
  };
}

function test(json_data){
  size = json_data.length;
  var text = "";

for (var i = 0; i < json_data.length; i++) {
  text = "<ul id = "+i+">";
  text += "<li>" + json_data[i].landing_centre_name_in_requested_language+ "</li>";
 // text += "<li>" + json_data[i].district + "</li>";
  text += "<li>" + json_data[i].distance_km+"km" + "</li>";
  text += "</ul>";
  document.getElementById("aaron-family").innerHTML += text;
}
if(j ===0){
  console.log("hello");
  console.log(size);
  document.getElementById(j).style.backgroundColor = "red";
}
  
firstItem = document.getElementById(0);
 secondItem = document.getElementById(1);
 thirdItem = document.getElementById(2);
 fourthItem = document.getElementById(3);
 fifthItem = document.getElementById(4);
 sixthItem = document.getElementById(5);
 seventhItem = document.getElementById(6);
 //firstItem.style.backgroundColor = "red";

var previousItem = null;
var currentItem = null;
var nextItem = null;


const softkeyCallback = {
  left: function() {
    console.log("this is leftlocalStorage.setItem('name',  name.value); function");
    backbutton();
     
    
  },
  center: function(button) {
    console.log(`thease are the button details: ${json_data[button].landing_centre} ${json_data[button].district} `)
    console.log(button +"center");
    localStorage.setItem('landingsite', json_data[button].landing_centre );
     localStorage.setItem('landingsiteindex', button);
      localStorage.setItem('landingsitestate', json_data[button].state);
      localStorage.setItem('landingsitelanguage', json_data[button].language);
      localStorage.setItem('landingsitedistrict', json_data[button].district);
    
    if(indicator1 === "occupation"){
     
      console.log("i am if");
      window.location.href = "registration.html";
    }
    else{
      console.log("else");
      var queryString =
      "?para1=" +
      button +
      "&fishingSiteName=&" +
      json_data[button].landing_centre_regional+"&"+json_data[button].state+"&"+
          json_data[button].landing_centre+"&"+json_data[button].district;
    console.log("Number : " + queryString);
      console.log(`${localStorage.getItem('landingsiteindex')} ${ localStorage.getItem('landingsite' )} ${localStorage.getItem('landingsitestate')}`)
   window.location.href = "thirdpage.html" + queryString;
    }
    
  },
  right: function() {
    backbutton();
  }
};

function backbutton() {
  console.log("this is back button");
  console.log(indicator);
  if (indicator === 0) {
    console.log("hello");
    window.location.href = "index.html";
  }
  else {
    if(indicator1 === "occupation"){
      window.location.href = "chooseoccupation.html"
    }
    else{
    softkeyCallback.center(indicator1-1);}
  }
  
}
//gives the current element when you tap arrow up
function getCurrentItem() {
  currentItem = j;
  nextItem = j+1;
  j = ((j+1 %size) + size) % size;
  console.log(j);
  return currentItem;
}
//gives the current element when you tap arrow down
function getCurrentItemdown() {
  currentItem = j;
  previousItem = j-1;
  j = ((j-1 %size) + size) % size;

  console.log(j);
  return currentItem;
}


function changeItemColor() {
  currentItem = getCurrentItem();
  document.getElementById(currentItem).style.backgroundColor = "black";
  
  document.getElementById(nextItem).style.backgroundColor = "red";
  
}
function changeItemColordown() {
  currentItem = getCurrentItemdown();

  document.getElementById(currentItem).style.backgroundColor = "black";
  
  document.getElementById(previousItem).style.backgroundColor = "red";
  
}

window.addEventListener("load", () => {
  firstItem.style.backgroundColor = "red";
  currentItem = firstItem;
});
/**
 * event handler for the keys pressed
 */
window.addEventListener("keydown", evt => {
  console.log(evt);
  switch (evt.key) {
    case "ArrowDown":
      changeItemColor();
      break;
    case "ArrowUp":
      changeItemColordown();
      break;
    case "SoftLeft":
      // Action case press left key
      console.log("i am left");
      softkeyCallback.left();      
      break;
    case "SoftRight":
      // Action case press right key
      softkeyCallback.right();
      break;
    case "Enter":
      pressEnterButton();
      break;
    default:
      console.log("you press soft key: " + evt.key);
      break;
    } 
});

document.addEventListener("keydown", handleKeyDown);


function pressEnterButton() {
  currentItem = getCurrentItem();
  console.log(document.getElementById(currentItem));
    localStorage.setItem('location', document.getElementById(currentItem).value);
  console.log("Index of app :" + currentItem);
  if (currentItem !== "") {
    softkeyCallback.center(currentItem);
  }
  else {
    window.location = "../elements/test.html";
  }
}



}
/**
 * initializing variables for the fishing sites 
 */
//console.log(json_data);

 