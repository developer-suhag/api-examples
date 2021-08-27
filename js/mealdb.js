const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}

const displayFood = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('col');
        mealCard.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}...
                </p>
            </div>
        </div>
        `;


        searchResult.appendChild(mealCard);
    });
}