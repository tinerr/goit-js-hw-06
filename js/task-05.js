const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const defaultName = outputName.textContent;

const theOutput = (event) => {
  const inputType = event.currentTarget.value.trim();
  outputName.innerHTML = inputType ? inputName.value : defaultName;
};

inputName.addEventListener("input", theOutput);
