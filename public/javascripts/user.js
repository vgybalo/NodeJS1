const xhr = new XMLHttpRequest();
const usersArr = document.querySelector('#usersArr');

xhr.open('GET','api/user');
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();//info post from users.js

let data = null; 
xhr.addEventListener('load', ()=> {
    console.log(xhr.response);//передає дані із users/data
    data = JSON.parse(xhr.response);//парсить JSON
    data.users.forEach(el => {
        console.log(el);
         let user = document.createElement('h2');
            user.innerHTML = 'This users name is'+' '+`${el.name}`;
            usersArr.append(user);
    });
    console.log(data);
    //document.querySelector('#data').innerHTML = data.name; // передає JSON в html
});