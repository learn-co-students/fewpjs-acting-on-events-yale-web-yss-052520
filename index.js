let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    dodger.style.left = `${Math.max(left - 5, 0)}px`;
  }

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    
    dodger.style.left = `${Math.min(right + 5, max_width() - dodger_width())}px`;
    
  }

  function moveDodgerUp() {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let up = parseInt(upNumbers, 10);
   
   
    dodger.style.bottom = `${Math.min(up + 5, max_height() - dodger_height())}px`;
    
  }
  function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
   
    dodger.style.bottom = `${Math.max(bottom - 5, 0)}px`;
    
  }

  function max_width(){
    let width_px = getComputedStyle(document.getElementById("game")).width;
    return parseInt(width_px.replace("px", ""), 10);
  }


  function max_height(){
    let height_px = getComputedStyle(document.getElementById("game")).height;
    return parseInt(height_px.replace("px", ""), 10);
  }

  function dodger_height(){
    let height_px = getComputedStyle(document.getElementById("dodger")).height;
    return parseInt(height_px.replace("px", ""), 10);
  }

  function dodger_width(){
    let width_px = getComputedStyle(document.getElementById("dodger")).width;
    return parseInt(width_px.replace("px", ""), 10);
  }

  document.addEventListener("keydown", function(e) {
    switch (e.key) {
      case "ArrowLeft":
        moveDodgerLeft();
        break;
      case "ArrowRight":
        moveDodgerRight();
        break;
      case "ArrowUp":
        moveDodgerUp();
        break;
      case "ArrowDown":
        moveDodgerDown();
        break;
    }});
  