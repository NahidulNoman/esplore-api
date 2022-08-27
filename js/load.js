function addButton(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => display(data))
}
function display(findData){
    let order = document.getElementById('orderList');
    for(let find of findData){
        let list = document.createElement('li');
        list.innerText = find.email;
        order.appendChild(list);
    }
}