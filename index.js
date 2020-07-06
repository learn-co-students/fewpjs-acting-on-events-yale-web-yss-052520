// Your code here
var dodger = document.getElementById('dodger');
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight(); 
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    /* position is relative to the container!! */
    if (left > 0 ) {
        dodger.style.left = `${left - 1}px`
    }
}

/* when you think about the container, the coordinates are left 
and bottom. To move to right, you need to add one onto it's current 
left coordinate */
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}