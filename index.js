document.addEventListener('DOMContentLoaded', function (event) {
  let dataText = ["Student.", "Designer.", "full-stack developer!"];

  // Types one text in the typwriter
  function typeWriter(text, i, callback) {
    if (i < (text.length)) {
      // Add next character to h1
      let span = document.querySelector("#web-span");
      span.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
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
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // Check if dataText[i] exists
    if (i < dataText.length) {
      // Text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // After callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  StartTextAnimation(0);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// top-container
sr.reveal('.navbar', {});
sr.reveal('.top-container', { delay: 200 });
sr.reveal('.top-cloud', { delay: 200 });
sr.reveal('.bottom-cloud', { delay: 200 });
sr.reveal('.mountain-img', { delay: 500 });

// middle-container
sr.reveal('.profile-row', {});
sr.reveal('.skill-row', { delay: 200 });
sr.reveal('.skills > div', { delay: 200 });
sr.reveal('.project', { delay: 200 });
sr.reveal('.row', { delay: 200 });
sr.reveal('.col', { delay: 500 });

// bottom-container
sr.reveal('.contact-me', {});
sr.reveal('h2', { delay: 200 });
sr.reveal('h3', { delay: 300 });
sr.reveal('.contact-me p', { delay: 400 });
sr.reveal('.btn', { delay: 500 });
