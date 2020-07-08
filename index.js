// code given from lab readme
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//   added code to make the dogger also move right
function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    }
}

// code given from lab readme
document.addEventListener("keydown", function(e) {
if (e.key === "ArrowLeft") {
    moveDodgerLeft();
}

if (e.key === "ArrowRight") {
    moveDodgerRight();
}

});
