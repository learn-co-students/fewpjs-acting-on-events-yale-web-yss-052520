let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowLeft":
            moveDodgerLeft();
            break
        case "ArrowRight":
            moveDodgerRight();
            break
        default:
            break
    }
})

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

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}