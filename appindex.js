var firstItem = document.getElementById('first-item');
var secondItem = document.getElementById('second-item');
var thirdItem = document.getElementById('third-item');
var fourthItem = document.getElementById('fourth-item');

var previousItem = null;
var currentItem = null;
var nextItem = null;
const softkeyCallback = {
    left: function() 
    { 
      window.location.href="index.html";
    },
    center: function(button)
    { 
      var queryString = "?para1=" + button ;
      window.location.href="thirdpage.html"+ queryString;
    },
    right: function() 
    {
      /* var x = document.getElementById("myText").value;
  
      document.getElementById("myText").value = x+" right"
      document.body.appendChild(x);*/
      window.location.href="index.html";
    }

};


function getCurrentItem() {
  var flag = firstItem.classList.contains('highlight');

  var flag1 = secondItem.classList.contains('highlight'); 
  
  var flag2 = thirdItem.classList.contains('highlight');
  
  var flag3 = fourthItem.classList.contains('highlight');
  
  if (flag === true) {
    
    previousItem = secondItem;
    return firstItem;
  }
  else if (flag1 === true) {
     
    previousItem = thirdItem;
    
    return secondItem;
  }

  else if (flag2 === true) {
   
    previousItem = fourthItem;
    console.log(previousItem);
    return thirdItem;
  }
  else if (flag3 === true) {
    
    previousItem = firstItem;
    console.log(previousItem);
    return fourthItem;
  }

  else {
    previousItem = firstItem;
    return secondItem;
  }
}

function getCurrentItemdown() {
  var flag = firstItem.classList.contains('highlight');

  var flag1 = secondItem.classList.contains('highlight'); 
  
  var flag2 = thirdItem.classList.contains('highlight');
  
  var flag3 = fourthItem.classList.contains('highlight');
  
  if (flag === true) {
    
    nextItem = secondItem;
    return firstItem;
  }
  else if (flag1 === true) {
     
    nextItem = thirdItem;
    
    return secondItem;
  }

  else if (flag2 === true) {
   
    nextItem = fourthItem;
    console.log(previousItem);
    return thirdItem;
  }
  else if (flag3 === true) {
    
    nextItem = firstItem;
    console.log(previousItem);
    return fourthItem;
  }

  else {
    nextItem = firstItem;
    return secondItem;
  }
}
function getCurrentItem() {
  var flag = firstItem.classList.contains('highlight');

  var flag1 = secondItem.classList.contains('highlight'); 
  
  var flag2 = thirdItem.classList.contains('highlight');
  
  var flag3 = fourthItem.classList.contains('highlight');
  
  if (flag === true) {
    
    previousItem = fourthItem;
    return firstItem;
  }
  else if (flag1 === true) {
     
    previousItem = firstItem;
    
    return secondItem;
  }

  else if (flag2 === true) {
   
    previousItem = secondItem;
    console.log(previousItem);
    return thirdItem;
  }
  else if (flag3 === true) {
    
    previousItem = thirdItem;
    console.log(previousItem);
    return fourthItem;
  }

  else {
    previousItem = firstItem;
    return secondItem;
  }
}


function changeItemColor() {
  currentItem = getCurrentItem();
  currentItem.classList.remove('highlight');
  currentItem.classList.add('white');
  previousItem.classList.add('highlight');
  previousItem.classList.remove('white');
}
function changeItemColordown() {
  currentItem = getCurrentItemdown();
  currentItem.classList.remove('highlight');
  currentItem.classList.add('white');
  nextItem.classList.add('highlight');
  nextItem.classList.remove('white');

}

window.addEventListener('load', () => {
  firstItem.classList.add('highlight');
  currentItem = firstItem;
});

window.addEventListener('keydown', (evt) => {
  console.log(evt);
  switch (evt.key) {
    case 'ArrowDown':
      changeItemColordown();
      break;
    case 'ArrowUp':
      changeItemColor();
      break;
    case 'SoftLeft':
      // Action case press left key
      softkeyCallback.left();
    break;

    case 'SoftRight':
      // Action case press right key
      softkeyCallback.right();
    break;   

    case 'Enter':
      currentItem = getCurrentItem();
      if (currentItem.id === "first-item"){
        softkeyCallback.center("button1");
      }

      else if(currentItem.id === "second-item"){
        console.log("heyy")
        softkeyCallback.center("button2")
      }
      else if(currentItem.id === "third-item"){
        softkeyCallback.center("button3")
      }
      else if(currentItem.id === "fourth-item"){
        softkeyCallback.center("button4")
      }
      else 
      {
        window.location = '../elements/test.html';
      }
      break;
    default:
      console.log('you press soft key: ' + evt.key);
      break;
  }
});

document.addEventListener('keydown', handleKeyDown);