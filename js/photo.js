function addPhotos(){
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => {
        let divContainer = document.getElementById('photoContainer');
        for(let content of data){
            console.log(content)
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('per-content')
            makeDiv.innerHTML = `
            <h3>AlbumId : ${content.albumId} </h3>
            <h3>Id : ${content.id} </h4>
            <h3>url : ${content.url} </h3>
            <h2>Title : ${content.title} </h2>
            `
            divContainer.appendChild(makeDiv);
        }
    })
}
addPhotos();