const loadPhone = (phoneName,dataLimit) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    .then(rest => rest.json())
    .then(phones => {
        let mainContainer = document.getElementById('mainContainer');
        mainContainer.innerHTML = ``;

        let showAll = document.getElementById('show-all');
        if(dataLimit && (phones.data).length > 10){
            phones.data = phones.data.slice(0,10);
            showAll.classList.remove('d-none')
        }
        else{
            showAll.classList.add('d-none')
        }
        
        let noPhoneMessage = document.getElementById('no-phone');
        if((phones.data).length === 0){
            noPhoneMessage.classList.remove('d-none')
        }
        else{
            noPhoneMessage.classList.add('d-none')
        }
        phones.data.forEach(phone => {
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('col');
            makeDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top w-75" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Phone Details</button>
            </div>
          </div>
            `
            mainContainer.appendChild(makeDiv);
        })
        toggleSpinner(false);
    })
}

const getViewAll = (dataLimit) => {
    toggleSpinner(true);
    let input = document.getElementById('type');
    let inputValue = input.value;
    loadPhone(inputValue,dataLimit);
    // input.value = '';
}

document.getElementById('buttonClick').addEventListener('click',function(){
    getViewAll(10);
})

document.getElementById('type').addEventListener('keypress',function(even){
    console.log(even.key)
    if(even.key === 'Enter'){
        getViewAll(10);
    }
})

const toggleSpinner = (isLoading) => {
    let loader = document.getElementById('loading');
    if(isLoading){
        loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    getViewAll();
})

const phoneDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(rest => rest.json())
    .then(phones => {
        console.log(phones.data)
        let modalContainer = document.getElementById('storeModal');
        modalContainer.textContent = ``;
        let makeDiv = document.createElement('div');
        makeDiv.classList.add('modal-content');
        makeDiv.innerHTML = `
          <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${phones.data.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                 <div class="modal-body">
                    <img src="${phones.data.image}"> <br> <br>
                        <h6>Brand : ${phones.data.brand}</h6> <br>
                        <h6>MainFeatures : ${(phones.data.mainFeatures).sensors.length}</h6>
                </div>
                        <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        `
        modalContainer.appendChild(makeDiv);
    })
}

// loadPhone();