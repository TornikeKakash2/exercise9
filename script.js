const mealName = document.querySelector(".meal");
const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
async function fetchData() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  let meals = await response.json();
  mealName.textContent = meals.meals[0].strMeal;
  console.log(meals.meals[0].strMeal);
}

btn.addEventListener("click", () => fetchData());
