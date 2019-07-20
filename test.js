

var fishingPointArray = [
  {
    state: "SOUTH TAMILNADU",
    district: "Kanniyakumari",
    landing_centre: "Pallam",
    language: "Tamil" / "English" / "None"
  },
  {
    state: "NORTH ANDHRAPRADESH",
    district: "EastGodavari",
    landing_centre: "Antarvedi",
    language: "Telugu" / "English" / "None"
  },
  {
    state: "SOUTH ANDHRAPRADESH",
    district: "SriPottiSriramuluNellore",
    landing_centre: "Pulinjerikuppam",
    language: "Telugu" / "English" / "None"
  },
  {
    state: "NORTH TAMILNADU",
    district: "Thanjavur",
    landing_centre: "Ganesapuram",
    language: "Tamil" / "English" / "None"
  }
];
var text = "";
for (var i = 0; i < fishingPointArray.length; i++) {
    j = i+1;
  text = "<ul>";
  

  text += "<li id = "+fishingPointArray[i].landing_centre +">" + fishingPointArray[i].landing_centre + "</li>";
  text += "<li id = "+fishingPointArray[i].district+">" + fishingPointArray[i].district + "</li>";
  text += "</ul>";
  document.getElementById("aaron-family").innerHTML += text;
}

var firstItem = document.getElementById("Pallam");
var firstItem1 = document.getElementById("Kanniyakumari");
var secondItem = document.getElementById("Antarvedi");
console.log(secondItem);
var secondItem1 = document.getElementById("EastGodavari");
var thirdItem = document.getElementById("Pulinjerikuppam");
var thirdItem1 = document.getElementById("SriPottiSriramuluNellore");
var fourthItem = document.getElementById("Ganesapuram");
var fourthItem1 = document.getElementById("Thanjavur");
console.log(thirdItem1);


var previousItem = null;
var previousItem1 = null;
var currentItem = null;
var currentItem1 = null;
var nextItem = null;
var nextItem1 = null;
const softkeyCallback = {
  left: function() {
    window.location.href = "index.html";
  },
  center: function(button) {
    var queryString = "?para1=" + button;
    window.location.href = "thirdpage.html" + queryString;
  },
  right: function() {
    window.location.href = "index.html";
  }
};

function getCurrentItem() {
  var flag = firstItem.style.backgroundColor;

  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;

  var flag3 = fourthItem.style.backgroundColor;

  if (flag === "red") {
    previousItem = secondItem;
    previousItem1 = secondItem1;
    currentItem1 = firstItem1
    return firstItem;
  } else if (flag1 === "red") {
    previousItem = thirdItem;
    previousItem1 = thirdItem1;
    currentItem1 = secondItem1;
    return secondItem;
  } else if (flag2 === "red") {
    previousItem = fourthItem;
    previousItem1 = fourthItem1;
    currentItem1 = thirdItem1;
    return thirdItem;
  } else if (flag3 === "red") {
    previousItem = firstItem;
    previousItem1 = firstItem1;
    currentItem1 = fourthItem1;
    return fourthItem;
  } else {
    previousItem = firstItem;
    return secondItem;
  }
}

function getCurrentItemdown() {
    var flag = firstItem.style.backgroundColor;
  
    var flag1 = secondItem.style.backgroundColor;
  
    var flag2 = thirdItem.style.backgroundColor;
  
    var flag3 = fourthItem.style.backgroundColor;
  
    if (flag === "red") {
      previousItem = fourthItem;
      previousItem1 = fourthItem1;
      currentItem1 = firstItem1
      return firstItem;
    } else if (flag1 === "red") {
      previousItem = firstItem;
      previousItem1 = firstItem1;
      currentItem1 = secondItem1;
      return secondItem;
    } else if (flag2 === "red") {
      previousItem = secondItem;
      previousItem1 = secondItem1;
      currentItem1 = thirdItem1;
      return thirdItem;
    } else if (flag3 === "red") {
      previousItem = thirdItem;
      previousItem1 = thirdItem1;
      currentItem1 = fourthItem1;
      return fourthItem;
    } else {
      previousItem = firstItem;
      return secondItem;
    }
  }
  




function changeItemColor() {
  currentItem = getCurrentItem();
  currentItem.style.backgroundColor = "black";
  currentItem1.style.backgroundColor = "black";
  previousItem.style.backgroundColor = "red";
  previousItem1.style.backgroundColor = "red";
}
function changeItemColorup() {
    currentItem = getCurrentItemdown();
    currentItem.style.backgroundColor = "black";
    currentItem1.style.backgroundColor = "black";
    previousItem.style.backgroundColor = "red";
    previousItem1.style.backgroundColor = "red";
  }


window.addEventListener("load", () => {
  console.log("i am here");
    firstItem.style.backgroundColor = "red";
    firstItem1.style.backgroundColor = "red";

});

window.addEventListener("keydown", evt => {
  console.log(evt);
  switch (evt.key) {
    case "ArrowDown":
      console.log("hey i am arrow down");
      changeItemColor();
      break;
    case "ArrowUp":
      changeItemColorup();
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
      currentItem = getCurrentItem();
      if (currentItem.id === "Pallam") {
        softkeyCallback.center("Pallam");
      } else if (currentItem.id === "Antarvedi") {
        console.log("heyy");
        softkeyCallback.center("Antarvedi");
      } else if (currentItem.id === "Pulinjerikuppam") {
        softkeyCallback.center("Pulinjerikuppam");
      } else if (currentItem.id === "Ganesapuram") {
        softkeyCallback.center("Ganesapuram");
      } else {
        window.location = "../elements/test.html";
      }
      break;
    default:
      console.log("you press soft key: " + evt.key);
      break;
  }
});

document.addEventListener("keydown", handleKeyDown);