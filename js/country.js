const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(rest => rest.json())
    .then(data => countriesHere(data))
}
const countriesHere = countries => {
    const countryDiv = document.getElementById('country');
    countryDiv.classList.add('addCountry')
    countries.forEach(country => {
        // console.log(country)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('country')
        makeDiv.innerHTML = `
        <h4>Country Name : ${country.name.common} , Capital : ${country.capital} </h4>
        <h4>Religion : ${country.region}</h4>
        <h4>Population : ${country.population} </h4>
        <button onclick="countryDetails('${country.cca2}')">Details</button>
        `
        countryDiv.appendChild(makeDiv)
    });
    // for(const country of countries){
    //     console.log(country)
    //     const makeDiv = document.createElement('div');
    //     makeDiv.classList.add('country')
    //     makeDiv.innerHTML = `
    //     <h4>Country Name : ${country.name.common} , Capital : ${country.capital} </h4>
    //     <h4>Religion : ${country.region}</h4>
    //     <h4>Population : ${country.population} </h4>
    //     `
    //     countryDiv.appendChild(makeDiv)
    // }
}
const countryDetails = (code) => {
    // const url = 'https://restcountries.com/v3.1/alpha/${code}'
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => loadDetails(data[0]))
}
const loadDetails = (country) => {
    const makeDiv = document.getElementById('details');
    makeDiv.innerHTML = `
    <h1>Name : ${country.name.common} </h1>
    <img src="${country.flags.png}">
    `
console.log(country)
}
loadCountry();