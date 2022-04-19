function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

// console.log(colorText)
// console.log(changeColorBtn)
// console.log(body)

changeColorBtn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.background = getRandomHexColor();
  colorText.textContent = body.style.background;
}