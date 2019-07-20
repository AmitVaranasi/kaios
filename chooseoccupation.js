var number = localStorage.getItem('number');
console.log(number);

var fishingPointArray = [
  {
    occupation: "FARMER"
  },
  {
    occupation: "FISHERMAN"
  },
  {
    occupation: "LIVESTOCK"
  },
  {
    occupation: "OTHER"
  }
];




var text = "";
var j = fishingPointArray.length;
for (var i = 0; i < fishingPointArray.length; i++) {
  
  text = "<ul id = "+i+">";
  text += "<li id ="+j+">" + fishingPointArray[i].occupation+ "</li>";
  j++;
  text += "</ul>";
  document.getElementById("aaron-family").innerHTML += text;
}
/**
 * initializing variables for the fishing sites 
 */

var firstItem = document.getElementById(0);
var secondItem = document.getElementById(1);
var thirdItem = document.getElementById(2);
var fourthItem = document.getElementById(3);
var previousItem = null;
var currentItem = null;
var nextItem = null;
var selectedelementindex = 0;

var language = localStorage.getItem('lan' );
if(language === '0'){
  console.log(language)
  fetch("./IN-EN.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("4").textContent = data.Profession_Agri;
  document.getElementById("5").textContent = data.Profession_Fishing;
  document.getElementById("6").textContent = data.Profession_Livestocks;
  document.getElementById("7").textContent = data.Profession_Other;
  document.getElementById("mobileNumber").textContent = data.Profession_Screen_Title;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Back;
});
}
else if(language === '1'){
  console.log("hello telugu");
  fetch("./IN-TE.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("4").textContent = data.Profession_Agri;
  document.getElementById("5").textContent = data.Profession_Fishing;
  document.getElementById("6").textContent = data.Profession_Livestocks;
  document.getElementById("7").textContent = data.Profession_Other;
  document.getElementById("mobileNumber").textContent = data.Profession_Screen_Title;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Back;
});
}
else if(language === '2'){
  fetch("./IN-TA.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("4").textContent = data.Profession_Agri;
  document.getElementById("5").textContent = data.Profession_Fishing;
  document.getElementById("6").textContent = data.Profession_Livestocks;
  document.getElementById("7").textContent = data.Profession_Other;
  document.getElementById("mobileNumber").textContent = data.Profession_Screen_Title;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Back;
});
}
else{

}



const softkeyCallback = {
  
  center: function(button) {
     localStorage.setItem('occupation',  fishingPointArray[button].occupation);
    if(button === "0"){
      console.log(button);
      var queryString =
      "?para1=" +
      button +
      "&fishingSiteName=" +
      fishingPointArray[button].occupation;
    console.log("Number : " + queryString);
    window.location.href = "addressmode.html" + queryString;
    }
    else if(button === "1"){
      console.log(button);
      var queryString =
      "?para1=" +
      button+"&fishingSiteName=&" +
      "occupation";
      window.location.href = "fishingpointscreen.html"+queryString;
    }
  },
  right: function() {
    window.location.href = "entername.html";
  }
};


//gives the current element when you tap arrow up
function getCurrentItem() {
  var flag = firstItem.style.backgroundColor;

  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;

  var flag3 = fourthItem.style.backgroundColor;
  
  if (flag === "red") {
    previousItem = secondItem;
    
    currentItem = firstItem;
  } else if (flag1 === "red") {
    previousItem = thirdItem;
    
    currentItem = secondItem;
  } else if (flag2 === "red") {
    previousItem = fourthItem;
    
    currentItem = thirdItem;
  } else if (flag3 === "red") {
    previousItem = firstItem;
    
    currentItem = fourthItem;
  } else {
    previousItem = firstItem;
    currentItem =  secondItem;
  }
  return currentItem;
}
//gives the current element when you tap arrow down
function getCurrentItemdown() {
  var flag = firstItem.style.backgroundColor;
  
  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;

  var flag3 = fourthItem.style.backgroundColor;

  if (flag === "red") {
    previousItem = fourthItem;
    
    currentItem = firstItem;
  } else if (flag1 === "red") {
    previousItem = firstItem;
    
    currentItem =  secondItem;
  } else if (flag2 === "red") {
    previousItem = secondItem;
    
    currentItem = thirdItem;
  } else if (flag3 === "red") {
    previousItem = thirdItem;
    
    currentItem =  fourthItem;
  } else {
    previousItem = firstItem;
    currentItem = secondItem;
  }
  return currentItem;
}


function changeItemColor() {
  currentItem = getCurrentItem();
  currentItem.style.backgroundColor = "black";
  
  previousItem.style.backgroundColor = "red";
  
}
function changeItemColordown() {
  currentItem = getCurrentItemdown();
  currentItem.style.backgroundColor = "black";
  
  previousItem.style.backgroundColor = "red";
  
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
  console.log("Index of app :" + currentItem.id);
  if (currentItem.id !== "") {
    softkeyCallback.center(currentItem.id);
  }
  else {
    window.location = "../elements/test.html";
  }
}

