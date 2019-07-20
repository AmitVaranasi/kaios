var language = localStorage.getItem('lan' );
if(language === '0'){
  console.log(language)
  fetch("./IN-EN.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("mobileNumber").textContent = data.Login_Title;
  document.getElementById("lsk").textContent = data.Footer_Button_Clear;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
  alert1 = data.Mobile_Number_Error;
  localStorage.setItem('alert1',alert1);
  localStorage.setItem('confirm',data.Login_Screen_Error_Not_Registered);
});
}
else if(language === '1'){
  console.log("hello telugu");
  fetch("./IN-TE.json")
.then(response =>  response.json())
.then(data => {
  console.log("i am inside");
    
  document.getElementById("mobileNumber").textContent = data.Login_Screen_Question;
  document.getElementById("lsk").textContent = data.Footer_Button_Clear;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
 localStorage.setItem('alert1',data.Mobile_Number_Error);
  localStorage.setItem('confirm',data.Login_Screen_Error_Not_Registered);
});
}
else if(language === '2'){
  fetch("./IN-TA.json")
.then(response =>  response.json())
.then(data => {
  console.log("i am inside");
  document.getElementById("mobileNumber").textContent = data.Login_Screen_Question;
  document.getElementById("lsk").textContent = data.Footer_Button_Clear;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
 localStorage.setItem('alert1',data.Mobile_Number_Error);
  localStorage.setItem('confirm',data.Login_Screen_Error_Not_Registered);
});
}
else{

}


document.getElementById("myText").focus();
window.addEventListener("offline", function(e) {
  alert("you r offline")
});
var apiconfig = {
  "Base_URL": "http://guru.southindia.cloudapp.azure.com:8001",
  "Get_User_Profiles_API": {
      "urlPath": "/users/get/?phone=",
      "method": "GET"
  }
}

/**
 * this function is handling whats happens when softkeys are pressed
 */
const softkeyCallback = {
  // This function is for clearing and refreshing the page
  left: function() {
    window.location.href = "chooselanguage.html";
    document.getElementById("myText").value = "";
  },
  //This function is formaking an api request and verifiying the number entered is a valid number
  center: function() {
    var num = 0;
    //alert("you have been signed in");
    var x = document.getElementById("myText").value;
   localStorage.setItem('number', x);
    var request = new XMLHttpRequest();
    request.open(
      apiconfig.Get_User_Profiles_API.method,
      apiconfig.Base_URL+apiconfig.Get_User_Profiles_API.urlPath+x,
      true
    );

    request.send();
    console.log("this is" + request.status);
    request.onload = function() {
      var json_data = JSON.parse(this.response);
      if(json_data.length === 0){
        if(x.length !== 10){
          alert(localStorage.getItem('alert1'));
          
        }
        else if(x === "mobile number"){
          alert(localStorage.getItem('alert1'));
        }
        else{
          console.log(localStorage.getItem('confirm'));
          confirm(localStorage.getItem('confirm'));
          window.location.href = "entername.html";
        }
      }
      else{
        console.log("hey i am here");
        
        window.location.href = "fishingpointscreen.html";
      }
      // if (request.status >= 200 && request.status < 400) {
      //   console.log("hey i am here");
      //   var json_data = JSON.parse(this.response);
      //   //num here is checking weather the number you have sent in the post request has any data or not
      // num = json_data.users.length;
      // if (num > 0) {
      //   window.location.href = "fishingpointscreen.html";
      // } else {
      //   let x = document.getElementById("myText").value;
      //   if(x === "mobile number"){
      //     alert("please enter mobile number");
      //   }
      //   else if(x.length !== 10){
      //     alert("please enter a valid mobile number");
      //   }
      //   else{
      //   window.location.href = "chooselanguage.html";}
      // }
      // }
      // else{
      //   alert("no internet please check your connection");
      // }
      
    };
  },
  //This function is deleting a single text element from the text field
  right: function() 
  {
    var x = document.getElementById("myText").value;
    document.getElementById("myText").value = x.substring(0, x.length - 1);
  },
  //This function is for entering number from your num-pad
  
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
      //softkeyCallback.number(evt.key);
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);