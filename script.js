//NAV BAR//


//🗿🗿🗿

////////////////////////////////////////////////////////////////////////////////////////////


var myIndex = 0;
var isPaused = false;
let killtime
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    } 
    x[myIndex-1].style.display = "block";  

    if (!isPaused) {
        killtime = setTimeout(carousel, 5000); // Change image every 5 seconds
        // console.log("next pic")
    }
}

function pauseCarousel() {
    isPaused = true;
    clearTimeout(killtime)
    // console.log("stop")
}

function resumeCarousel() {
    isPaused = false;
    killtime = setTimeout(carousel, 5000);
    // console.log("resume")
}