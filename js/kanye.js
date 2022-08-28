const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => {
        const makeContainer = document.getElementById('container');
        makeContainer.innerText = data.quote;
    })
}

// const onLoad = load => {
//         const makeContainer = document.getElementById('container');
//         makeContainer.innerText = load.quote;
// }