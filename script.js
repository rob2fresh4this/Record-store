//NAV BAR//
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

function myFunction() {
  let sticky = document.body.offsetWidth * .20
  console.log(sticky)
  console.log(window.pageYOffset)
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//🗿🗿🗿🗿🗿

////////////////////////////////////////////////////////////////////////////////////////////

//GALLERY SLIDER//

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every # seconds
}