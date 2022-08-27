function postUpdate(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPost(data))
}
function getPost(thisPost){
    let mainDiv = document.getElementById('container');
    
    for(let post of thisPost){
        let create = document.createElement('div');
        create.classList.add('post')
        create.innerHTML = `
        <h5>User-${post.userId} </h5>
        <h4>Title- ${post.title} </h4>
        <p>Description- ${post.body} </p>
        `
        mainDiv.appendChild(create);
    }
}
postUpdate()