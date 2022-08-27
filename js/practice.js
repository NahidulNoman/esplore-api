function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        let addDiv = document.getElementById('divContainer');
        for(let comment of data){
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('per-div');
            
            makeDiv.innerHTML =`
            <h4>ID : ${comment.id}</h4>
            <h4>PostID : ${comment.postId} </h4>
            <h4>Email : ${comment.email} </h4>
            <h3>Name : ${comment.name} </h3>
            <p>Description : ${comment.body} </p>
            `
            addDiv.appendChild(makeDiv);
        }
    })
}
// function addComment(comments){
//     let addDiv = document.getElementById('divContainer');
//     for(let comment of comments){
//         let makeDiv = document.createElement('div');
//         makeDiv.classList.add('per-div');
        
//         makeDiv.innerHTML =`
//         <h4>ID : ${comment.id}</h4>
//         <h4>PostID : ${comment.postId} </h4>
//         <h4>Email : ${comment.email} </h4>
//         <h3>Name : ${comment.name} </h3>
//         <p>Description : ${comment.body} </p>
//         `
//         addDiv.appendChild(makeDiv);
//     }
// }
comment();