const sizeController = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

function getRandomHExColor() {
  return `#${Math.floor(math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

sizeController.addEventListener("input", () => {
  output.style.fontSize = `${sizeController.value}px`;
  output.style.transition = "font-size 250ms ease, color 250ms ease";
});
