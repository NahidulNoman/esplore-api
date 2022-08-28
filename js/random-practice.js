const femaleUser = () => {
    fetch(`https://randomuser.me/api/?results=50`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let mainData = document.getElementById('container');
        data.results.forEach(getData => {
            let div = document.createElement('div');
            div.innerHTML = `
            <h3>Name : ${getData.id.name}</h3>
            <h3>Email : ${getData.email}</h3>
            `
            mainData.appendChild(div)
        });
    })
}
femaleUser();