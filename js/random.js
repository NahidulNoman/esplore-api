const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(rest => rest.json())
    .then(data => userRandom(data.results))
}

const userRandom = users => {
    const divContainer = document.getElementById('divContainer');
    for(let user of users){
        console.log(user)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('person')
        makeDiv.innerHTML = `
        <h3>Name : ${user.name.first} ${user.name.last} </h3>
        <h3>Location : City : ${user.location.city} , Country : ${user.location.country} </h3>
        <h3>Email : ${user.email} </h3>
        `
        divContainer.appendChild(makeDiv);
    }
}
randomUser();