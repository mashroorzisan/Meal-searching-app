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
        <div onclick="(displayMealId(${meal.idMeal}))" class="card h-100">
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

const displayMealId = (id) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const food = () => {
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals[0].strMeal))
            .then(data => mealDetails(data))
    }
    food();
}
const mealDetails = (meal) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    const newContainer = document.createElement('div');
    newContainer.innerHTML = `
        <div class="card text-bg-dark">
        <img src="${meal.meals[0].strMealThumb}" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">${meal.meals[0].strMeal}</h5>
            <p class="card-text">${meal.meals[0].strInstructions.slice(0, 200)}</p>
            <p class="card-text"><small><a href="${meal.meals[0]?.strYoutube}">YouTube</a></small></p>
        </div>
        </div>
    `
    mealContainer.appendChild(newContainer)
}