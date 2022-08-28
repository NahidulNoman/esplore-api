const restCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(rest => rest.json())
    .then(countryData => {
        let mainContainer = document.getElementById('country');
        mainContainer.classList.add('country')
        countryData.forEach(data => {
            //console.log(data)
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('per-country')
            makeDiv.innerHTML = `
            <h4>Country Name : ${data.name.common}, Capital : ${data.capital}</h4>
            <h4>Independent : ${data.independent ? data.independent : 'not independent'} </h4>
            <h4>Language : ${data.languages && Object.values(data.languages)[0]}</h4>
            <button onclick="buttonHandler('${data.cca2}')">Click Me</button>
            `
            mainContainer.appendChild(makeDiv);
        });
    })
}
const buttonHandler = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data[0])
       let getDetails = document.getElementById('details');
       getDetails.innerHTML = `
       <h2>Name ${data[0].name.common}</h2>
        <img src="${data[0].flags.png}">
       `
    })
}
restCountry();