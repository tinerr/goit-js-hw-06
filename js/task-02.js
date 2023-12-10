const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

ingredientsList.append(...ingredientsArr);
