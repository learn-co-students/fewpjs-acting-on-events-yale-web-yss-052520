// Your code here


let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key == "ArrowRight") {
        moveDodgerRight();
      }
  });

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (left > 0 && left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}



