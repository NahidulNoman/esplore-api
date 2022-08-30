const loadFood = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(rest => rest.json())
    .then(data => callFood(data.meals))
}
const callFood = mealsFood => {
    if(mealsFood === null){
        mealsFood = []
    }
    //console.log(mealsFood)
    let foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    mealsFood = mealsFood.slice(0,10);

    const noFoodMessage = document.getElementById('no-food');
    if(mealsFood.length === 0){
        noFoodMessage.classList.remove('d-none');
    }
    else{
        noFoodMessage.classList.add('d-none');
    }

    mealsFood.forEach(meal => {
    // console.log(meal);
    let makeDiv = document.createElement('div');
    makeDiv.classList.add('col')
    makeDiv.innerHTML = `
       <div onclick="searchId(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
      </div>
    `
    foodContainer.appendChild(makeDiv);
  });
  toggleSpinner(false);
}


let searchFood = () => {
    toggleSpinner(true);
    let yourFood = document.getElementById('yourFood');
    let getFood = yourFood.value;
    loadFood(getFood);
    // yourFood.value = '';
}


const toggleSpinner = (isLoading) => {
    let loader = document.getElementById('loading');
    if(isLoading){
        loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}

document.getElementById('yourFood').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        toggleSpinner(true);
        let yourFood = document.getElementById('yourFood');
        let getFood = yourFood.value;
        loadFood(getFood);
    }
})








// let searchId = (idMeal) => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
//     .then(res => res.json())
//     .then(data => getThoseFood(data.meals[0]))
// }
// let getThoseFood = (mealId) => {
//     let parentDiv = document.getElementById('main');
//     parentDiv.innerHTML = '';
//     let createDiv = document.createElement('card');
//     createDiv.classList.add('card');
//     createDiv.innerHTML = `
//     <img src="${mealId.strMealThumb}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${mealId.strMeal}</h5>
//                   <p class="card-text">${mealId.strInstructions.slice(0,200)}</p>
//      </div>
//     `
//     parentDiv.appendChild(createDiv);
// }