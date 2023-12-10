function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");
let size = 30; // Initialize the size outside of createBoxes function

function createBoxes(amount) {
  const elements = [];

  // Convert the input value to a number
  const boxCount = parseInt(amount, 10);

  for (let i = 0; i < boxCount; i += 1) {
    const color = getRandomHexColor();
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = color;
    elements.push(element);
    size += 10;
  }
  container.append(...elements);
}

const onBtnCreateClick = () => {
  createBoxes(input.value);
};

btnCreate.addEventListener("click", onBtnCreateClick);

const onBtnDestroyClick = () => {
  container.innerHTML = "";
  size = 30; // Reset the size to its initial value
  input.value = ""; // Optionally, clear the input field
};

btnDestroy.addEventListener("click", onBtnDestroyClick);
