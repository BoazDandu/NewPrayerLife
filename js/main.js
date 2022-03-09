window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  } else {
    document.getElementById("header").style.backgroundColor = "#000";
  }
}

function getTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();

 
  

  if (hour >= 12) {                 // Adding endings
    suffix = "PM";
  } else {
    suffix = "AM";
  }

  minutes = addZero(minutes); //Call addZero function

  var time = hour + " : " +  minutes + " " + suffix; //combine hour minute and the suffix
  document.getElementById("date").innerHTML = time;

  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    } 
    return number;
  }

  return time;
}

setInterval( function() {
  getTime();
}, 1000);

const menuBtn = document.querySelector('#openNav');
let menuOpen = false;
const navMenu = document.querySelector('.navmenu');


menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navMenu.classList.add('active-nav');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navMenu.classList.remove('active-nav');
    }

})


let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});



