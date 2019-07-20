var fishingPointArray = [
  {
    state: "SOUTH TAMILNADU",
    district: "Kanniyakumari",
    landing_centre: "Pallam",
    language: "Tamil" / "English" / "None"
  },
  {
    state: "NORTH ANDHRAPRADESH",
    district: "East Godavari",
    landing_centre: "Antarvedi",
    language: "Telugu" / "English" / "None"
  },
  {
    state: "SOUTH ANDHRAPRADESH",
    district: "Sri Potti Sriramulu Nellore",
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
  // text = "<ul id = " + fishingPointArray[i].landing_centre + ">";
  text = "<ul id = " + i + ">";
  text += "<li>" + fishingPointArray[i].landing_centre + "</li>";
  text += "<li>" + fishingPointArray[i].district + "</li>";
  text += "</ul>";
  document.getElementById("aaron-family").innerHTML += text;
}
/*
var firstItem = document.getElementById("Pallam");
var secondItem = document.getElementById("Antarvedi");
var thirdItem = document.getElementById("Pulinjerikuppam");
var fourthItem = document.getElementById("Ganesapuram");
*/
var firstItem = document.getElementById(0);
var secondItem = document.getElementById(1);
var thirdItem = document.getElementById(2);
var fourthItem = document.getElementById(3);
var previousItem = null;
var currentItem = null;
var nextItem = null;
const softkeyCallback = {
  left: function() {
    window.location.href = "thirdpage.html";
  },
  center: function(button) {
    var queryString =
      "?para1=" +
      button +
      "&fishingSiteName=" +
      fishingPointArray[button].landing_centre;
    console.log("Number : " + queryString);
    window.location.href = "thirdpage.html" + queryString;
  },
  right: function() {
    window.location.href = "sites.html";
  }
};

function getCurrentItem() {
  var flag = firstItem.style.backgroundColor;

  var flag1 = secondItem.style.backgroundColor;

  var flag2 = thirdItem.style.backgroundColor;

  var flag3 = fourthItem.style.backgroundColor;

  if (flag === "red") {
    previousItem = secondItem;
    return firstItem;
  } else if (flag1 === "red") {
    previousItem = thirdItem;
    return secondItem;
  } else if (flag2 === "red") {
    previousItem = fourthItem;

    return thirdItem;
  } else if (flag3 === "red") {
    previousItem = firstItem;

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

  if (flag === "black") {
    previousItem = fourthItem;

    return firstItem;
  } else if (flag1 === "black") {
    previousItem = firstItem;

    return secondItem;
  } else if (flag2 === "black") {
    previousItem = secondItem;

    return thirdItem;
  } else if (flag3 === "black") {
    previousItem = thirdItem;

    return fourthItem;
  } else {
    previousItem = firstItem;
    return secondItem;
  }
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
      softkeyCallback.left();
      break;

    case "SoftRight":
      // Action case press right key
      softkeyCallback.right();
      break;

    case "Enter":
      currentItem = getCurrentItem();
      console.log("Index of app :" + currentItem.id);
      if (currentItem.id !== "") {
        softkeyCallback.center(currentItem.id);
      } else {
        window.location = "../elements/test.html";
      }
      break;
    default:
      console.log("you press soft key: " + evt.key);
      break;
  }
});

//document.addEventListener("keydown", handleKeyDown);
