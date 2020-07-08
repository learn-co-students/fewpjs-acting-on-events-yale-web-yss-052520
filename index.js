let dodger = document.getElementById("dodger");

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

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        console.log("left")
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        console.log("right")
        moveDodgerRight();
    } else {
        console.log("other")
    }
    // switch (e.key) {
    //     case "ArrowLeft":
    //         console.log("left")
    //         moveDodgerLeft();
    //         break;
    //     case "ArrowRight":
    //         console.log("right")
    //         moveDodgerRight();
    //         break;
    //     default:
    //         console.log("other")
    //         break;
    // }
});