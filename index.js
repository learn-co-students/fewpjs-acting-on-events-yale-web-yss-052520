// Your code here

var dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
        //  dodger.style.left = `${left + 1}px`;
    let widthNumber = document.getElementById("game").offsetWidth;
    let limit = widthNumber - document.getElementById("dodger").offsetWidth;
    // console.log(width)
    if (left < 360 ) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    // console.log(e.key)
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });