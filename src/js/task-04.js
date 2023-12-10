const increase = document.querySelector('[data-action="increment"]');
const decrease = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");
let counterValue = 0;

increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
