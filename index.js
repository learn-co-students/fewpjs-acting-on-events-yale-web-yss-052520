let dodger = document.getElementById("dodger");
const gamebox = document.getElementById('game')
const gameboxRight = parseInt(gamebox.offsetWidth, 10)
const dodgerWidth = parseInt(dodger.offsetWidth, 10)

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left, 10);

  if (left + dodgerWidth < gameboxRight) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveDodgerLeft(); break
    case "ArrowRight":
      moveDodgerRight(); break
  }
})
