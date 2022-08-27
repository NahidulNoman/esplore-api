// fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(data => console.log(data))

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => displayHere(data))
}
function displayHere(here){
    console.log(here);
}
function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userHere(data) )
}
function userHere(yourData){
    console.log(yourData);
}