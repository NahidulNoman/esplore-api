const buttonClick = () => {
    fetch('https://api.kanye.rest/')
    .then(rest => rest.json())
    .then(data => {
        console.log(data)
        let createDiv = document.getElementById('container')
        createDiv.innerText = data.quote
    })
}