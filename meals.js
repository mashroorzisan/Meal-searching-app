const loadMeals = (s) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${s}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}...</p>
                </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
        console.log(meal)
    });

}
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadMeals(searchText);

}