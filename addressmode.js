var fishingPointArray = [
  {
    select: "AutoDetect"
  },
  {
    select: "ENTER PINCODE"
  },
  {
    select: "MANUAL"
  },
  
];
var text = "";

for (var i = 0; i < fishingPointArray.length; i++) {
  text = "<ul id = "+i+">";
  text += "<li>" + fishingPointArray[i].select+ "</li>";
  
  text += "</ul>";
  document.getElementById("aaron-family").innerHTML += text;
}
/**
 * initializing variables for the fishing sites 
 */

var firstItem = document.getElementById(0);
var secondItem = document.getElementById(1);
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
      "&fishingSiteName=&" +
      fishingPointArray[button].select;
    console.log("Number : " + queryString);
    window.location.href = "enterpincodeoraddress.html" + queryString;
  },
  right: function() {
    window.location.href = "chooseoccupation.html";
  }
};


//gives the current element when you tap arrow up
function getCurrentItem() {
  var flag = firstItem.style.backgroundColor;

  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;

  
  
  if (flag === "red") {
    previousItem = secondItem;
    
    currentItem = firstItem;
  } else if (flag1 === "red") {
    previousItem = thirdItem;
    
    currentItem = secondItem;
  } else if (flag2 === "red") {
    previousItem = firstItem;
    
    currentItem = thirdItem;
  }  else {
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

  

  if (flag === "red") {
    previousItem = thirdItem;
    
    currentItem = firstItem;
  } else if (flag1 === "red") {
    previousItem = firstItem;
    
    currentItem =  secondItem;
  } else if (flag2 === "red") {
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

