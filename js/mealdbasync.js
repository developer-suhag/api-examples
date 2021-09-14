const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById("button-search");

// search by pressing enter
searchField.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});

const searchFood = async () => {
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        document.getElementById('search-error').style.display = 'block'

    } else {
        document.getElementById('search-error').style.display = 'none'
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayFood(data.meals)
            document.getElementById('result-error').style.display = 'none';
        } catch {
            document.getElementById('result-error').style.display = 'block';
        }
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayFood(data.meals))
    }

}

const displayFood = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealCard = document.createElement('div');
        mealCard.classList.add('col');
        mealCard.innerHTML = `
        <div data-bs-toggle="modal"
        data-bs-target="#exampleModal" onclick="loadMealDetail(${meal.idMeal})" class="card">
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
};

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url);
    const data = await res.json();
    showDetails(data.meals[0])
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => showDetails(data.meals[0]))
}

const showDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const mealCard = document.createElement('div');
    mealCard.classList.add('card');
    mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0, 300)}
                </p>
                <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Watch Tutorial</a>
            </div>
        `;


    mealDetails.appendChild(mealCard);
}