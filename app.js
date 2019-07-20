//window.location.href = "fishingpointscreen.html" ;
var fishingPointArray = ["English","తెలుగు", "தமிழ்"];
  
 var text = "";

 for (var i = 0; i < fishingPointArray.length; i++) {
   text = "<ul id = "+i+">";
   text += "<li>" + fishingPointArray[i]+ "</li>";
   text += "</ul>";
   document.getElementById("aaron-family").innerHTML += text;
 }

var firstItem = document.getElementById(0);
var secondItem = document.getElementById(1);
var islogin =  localStorage.getItem('islogin');
console.log(islogin);
console.log(`${localStorage.getItem('landingsiteindex')} ${ localStorage.getItem('landingsite' )} ${localStorage.getItem('landingsitestate')}`)
if(islogin === '1'){
  console.log("else");
      var queryString =
      "?para1=" +
      localStorage.getItem('landingsiteindex')+
      "&fishingSiteName=&" +
      localStorage.getItem('landingsite' )+"&"+localStorage.getItem('landingsitestate')+"&"+localStorage.getItem('landingsitelanguage');
    console.log("Number : " + queryString);
      console.log(`${localStorage.getItem('landingsiteindex')} ${ localStorage.getItem('landingsite' )} ${localStorage.getItem('landingsitestate')}`)
   window.location.href = "thirdpage.html" + queryString;
}



var thirdItem = document.getElementById(2);
var previousItem = null;
var currentItem = null;
var nextItem = null;
var selectedelementindex = 0;


const softkeyCallback = {

  center: function(button) {
    var queryString =
      "?para1=" +
      button +
      "&fishingSiteName=" +
      fishingPointArray[button];
      localStorage.setItem('lan', button); 
     localStorage.setItem('language', fishingPointArray[button]);
    window.location.href = "chooselanguage.html" + queryString;
  }
};


//gives the current element when you tap arrow up
function getCurrentItem() {
  var flag = firstItem.style.backgroundColor;

  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;
  console.log(flag);
  if (flag === "rgb(3, 144, 115)") {
    console.log("i am here");
    previousItem = secondItem;
    
    currentItem = firstItem;
  } else if (flag1 === "rgb(3, 144, 115)") {
    previousItem = thirdItem;
    
    currentItem = secondItem;
  } else if (flag2 === "rgb(3, 144, 115)") {
    previousItem = firstItem;
    
    currentItem = thirdItem;
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

  
  console.log(currentItem);
  if (flag === "rgb(3, 144, 115)") {
    previousItem = thirdItem;
    
    currentItem = firstItem;
  } else if (flag1 === "rgb(3, 144, 115)") {
    previousItem = firstItem;
    
    currentItem =  secondItem;
  } else if (flag2 === "rgb(3, 144, 115)") {
    previousItem = secondItem;
    
    currentItem = thirdItem;
  } else {
    previousItem = firstItem;
    currentItem = secondItem;
  }
  return currentItem;
}


function changeItemColor() {
  currentItem = getCurrentItem();
  currentItem.style.backgroundColor = "black";
  
  previousItem.style.backgroundColor = "rgb(3, 144, 115)";
  
}
function changeItemColordown() {
  currentItem = getCurrentItemdown();
  currentItem.style.backgroundColor = "black";
  
  previousItem.style.backgroundColor = "rgb(3, 144, 115)";
  
}

window.addEventListener("load", () => {
  firstItem.style.backgroundColor = "rgb(3, 144, 115)";
  currentItem = firstItem;
});
/**
 * event handler for the keys pressed
 */
window.addEventListener("keydown", evt => {
  console.log(evt);
  switch (evt.key) {
    case "ArrowDown":
    console.log("i am here");
      changeItemColor();
      break;
    case "ArrowUp":
      changeItemColordown();
      break;
    case "SoftLeft":
      // Action case press left key
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
  console.log("Index of app :" + currentItem.id);
  if (currentItem.id !== "") {
    softkeyCallback.center(currentItem.id);
  }
  else {
    window.location = "../elements/test.html";
  }
}

