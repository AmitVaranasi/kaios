var language = localStorage.getItem('lan' );
if(language === '0'){
  console.log(language)
  fetch("./IN-EN.json")
.then(response =>  response.json())
.then(data => {
  document.getElementById("mobileNumber").textContent = data.Enter_name;
  document.getElementById("lsk").textContent = data.Footer_Button_Back;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
  alert1 = data.Enter_name_alert;
  localStorage.setItem('alert1',alert1);
});
}
else if(language === '1'){
  console.log("hello telugu");
  fetch("./IN-TE.json")
.then(response =>  response.json())
.then(data => {
  console.log("i am inside");
  document.getElementById("mobileNumber").textContent = data.Enter_name;
  document.getElementById("lsk").textContent = data.Footer_Button_Back;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
 localStorage.setItem('alert1',data.Enter_name_alert);
});
}
else if(language === '2'){
  fetch("./IN-TA.json")
.then(response =>  response.json())
.then(data => {
  console.log("i am inside");
  document.getElementById("mobileNumber").textContent = data.Enter_name;
  document.getElementById("lsk").textContent = data.Footer_Button_Back;
  document.getElementById("csk").textContent = data.Footer_Button_Enter;
  document.getElementById("rsk").textContent = data.Footer_Button_Delete;
 localStorage.setItem('alert1',data.Enter_name_alert);
});
}
else{

}




document.getElementById("mobile number").focus();
const softkeyCallback = {
  // This function is for clearing and refreshing the page
  left: function() {
    window.location.href = "chooselanguage.html";
    document.getElementById("myText").value = "";
  },
  //This function is formaking an api request and verifiying the number entered is a valid number
  center: function() {
    var name = document.getElementById("mobile number");
    console.log(name)
    if(name.value !== ""){
      localStorage.setItem('name',  name.value);
    window.location.href = "chooseoccupation.html";}
    else{
      alert(localStorage.getItem('alert1'));
    }
    
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