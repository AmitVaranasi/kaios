 window.location.href="newpage.html";
var button = document.getElementById("click");
button.addEventListener('click',newfunction);

function newfunction(){
    alert("hooray it worked");
}

const softkeyCallback = {
    left: function() 
    {   window.location.href="index.html";
        var x = document.getElementById("myText").value;
        document.getElementById("myText").value = x+" left"
        document.body.appendChild(x); 
    },
    center: function() 
    {   var num = 0;
        //alert("you have been signed in");
        var x = document.getElementById("myText").value;
        var request = new XMLHttpRequest();
        request.open('POST',  'http://knowledgegrapg.jio.ril.com/api/guru/user/get/profile', true);        
        request.setRequestHeader("Content-type", "application/json");
        var parameters = {
            
            "phone": x
          }
        request.send(JSON.stringify(parameters));
        
        
          request.onload = function(){
            var json_data = JSON.parse(this.response);
            num = json_data.users.length;
            console.log(num);
              
            
            
            if(num === 2){
            window.location.href="newpage.html";}
            else{
                alert("please enter a valid mobile number");
            }
          }

    },
    right: function() 
    {    var x = document.getElementById("myText").value;
    /*
  
        document.getElementById("myText").value = x+" right"
        document.body.appendChild(x);*/
        document.getElementById("myText").value = x.substring(0,x.length-1);
    },
    number: function(num) 
    {
        var x = document.getElementById("myText").value;
        if(x === "mobile number"){
            document.getElementById("myText").value= num;
        }
        else{
            document.getElementById("myText").value = x+num;
        }
     }
};
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            console.log("Hello World!");
            // Action case press left key
            softkeyCallback.left();
        break;

        case 'SoftRight':
            // Action case press right key
            softkeyCallback.right();
        break;

        case 'Enter':
            console.log("Hello World!");
            // Action case press center key
            softkeyCallback.center();
        break;
        case '1':
            console.log("hello");
            softkeyCallback.number("1");
        break;    
        case '2':
            softkeyCallback.number("2");
        break;
        case '3':
            softkeyCallback.number("3");
        break;
        case '4':
            softkeyCallback.number("4");
        break;
        case '5':
            softkeyCallback.number("5");
        break;
        case '6':
            softkeyCallback.number("6");
        break;
        case '7':
            softkeyCallback.number("7");
        break;
        case '8':
            softkeyCallback.number("8");
        break;
        case '9':
            softkeyCallback.number("9");
        break;
        case '0':
            softkeyCallback.number("0");
        break;                                                
    }
};

document.addEventListener('keydown', handleKeyDown);

/*if(x.length != 10)
        {
            alert("enter a valid mobile number");
        }
        else
        {
            window.location.href="newpage.html";
        }       */