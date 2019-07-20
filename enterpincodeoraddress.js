var indicator = 0;
var indicator1=0;
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  
indicator = queries[0] ;
indicator1 = queries[2]
console.log(indicator1);
}

if(indicator1 === "ENTER PINCODE"){
    document.getElementById("textField").textContent = "Please Enter Your Pincode";
    document.getElementById("myText").value = "Enter Here";
}
else{
    console.log("i am here");
    document.getElementById("textField").textContent = "Please Enter Your Address";
    document.getElementById("myText").value = "Enter Here";
}
const softkeyCallback = {
    // This function is for clearing and refreshing the page
    left: function() {
      window.location.href = "addressmode.html";
      document.getElementById("myText").value = "";
    },
    //This function is formaking an api request and verifiying the number entered is a valid number
    center: function() {
      
    },
    //This function is deleting a single text element from the text field
    right: function() 
    {
      var x = document.getElementById("myText").value;
      document.getElementById("myText").value = x.substring(0, x.length - 1);
    },
    //This function is for entering number from your num-pad
    number: function(num) {
      var x = document.getElementById("myText").value;
      if (x === "Enter Here") {
        document.getElementById("myText").value = num;
      }
      else if(isNaN(num)){
       console.log("you have not entered a number");
      }else {
        document.getElementById("myText").value = x + num;
      }
    }
  };
  
  /**
   * 
   * event handler for the harware keys
   */
  function handleKeyDown(evt) {
    switch (evt.key) {
      case "SoftLeft":
        console.log("Hello World!");
        // Action case press left key
        softkeyCallback.left();
        break;
      case "SoftRight":
        // Action case press right key
        softkeyCallback.right();
        break;
      case "Enter":
        console.log("Hello World!");
        // Action case press center key
        softkeyCallback.center();
        break;
    // this is calls the number function which inturn writes the text into the textfield    
      default:
        softkeyCallback.number(evt.key);
        break;
    }
  }
  
  document.addEventListener("keydown", handleKeyDown);