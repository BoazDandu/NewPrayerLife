window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}


function getTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();

  if (hour >= 12) {                 // Adding endings
    suffix = "P.M";
  } else {
    suffix = "A.M";
  }

  minutes = addZero(minutes); //Call addZero function

  var time = hour + ":" + minutes + " " + suffix; //combine hour minute and the suffix
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
}, 100);

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



