document.addEventListener('DOMContentLoaded',function(event){
    let dataText = [ "Student.", "Designer.", "full-stack developer!"];

    // Types one text in the typwriter
    function typeWriter(text, i, callback) {
      if (i < (text.length)) {
        // Add next character to h1
       let span = document.querySelector("#web-span");
       span.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

        setTimeout(function() {
          typeWriter(text, i + 1, callback)
        }, 150);
      }
      // Text finished, call callback if there is a callback function
      else if (typeof callback == 'function') {
        // Call callback after timeout
        setTimeout(callback, 700);
      }
    }

// Start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
        StartTextAnimation(0);
        }, 20000);
    }
    // Check if dataText[i] exists
    if (i < dataText.length) {
        // Text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
         // After callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
    }
}

// start the text animation
StartTextAnimation(0);
});

