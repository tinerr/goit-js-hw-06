const bgChange = document.querySelector(".widget");
const bgBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bgBtn.addEventListener("click", () => {
  const bgHex = document.querySelector(".color");
  const bgDoc = document.querySelector("body");
  const randomColor = getRandomHexColor();
  bgDoc.style.backgroundColor = randomColor;
  // bgDoc.style.transition = 'background-color '+250+'ms cubic-bezier('+0.4+','+0+','+0.2+','+1+')';
  bgHex.textContent = randomColor;
});
