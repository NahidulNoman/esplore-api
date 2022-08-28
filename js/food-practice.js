const loadMeal = (gotSearch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${gotSearch}`)
    .then(rest => rest.json())
    .then(foodData => {
        //console.log(foodData.meals)
        let mainDiv = document.getElementById('food-container');
        mainDiv.textContent = ``;
        foodData.meals.forEach(data => {
             console.log(data)
            let makeDiv = document.createElement('col');
            makeDiv.innerHTML = `
            <div onclick="getFoodById(${data.idMeal})" class="card">
                <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.strMeal}</h5>
                  <p class="card-text">${data.strInstructions.slice(0,200)}</p>
                </div>
              </div>
            `
            mainDiv.appendChild(makeDiv);
        });
    })
}

let searchFood = () =>{
    let food = document.getElementById('type');
    let thoseValue = food.value;
    loadMeal(thoseValue);
    food.value = '';
    // console.log(thoseValue);
}
// loadMeal('fish');

let getFoodById = (byId) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${byId}`)
    .then(rest => rest.json())
    .then(get => {
        let foodById = document.getElementById('main');
        let createDiv = document.createElement('div');
        createDiv.classList.add('card')
        createDiv.innerHTML = `
        <img src="${get.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${get.strMeal}</h5>
                <p class="card-text">${get.strInstructions}</p>
     </div>
        `
        foodById.appendChild(createDiv)
    })
}