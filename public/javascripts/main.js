const xhr = new XMLHttpRequest();
const usersArr = document.querySelector('#usersArr');

xhr.open('GET','api/articles');
xhr.setRequestHeader("Content-type", "application/json");//header
xhr.send();//info post from users.js


let data = null; 
let title = null; 
xhr.addEventListener('load', ()=> {
    console.log(xhr.response);//передає дані із api
    data = JSON.parse(xhr.response);//парсить JSON
    article = data.title;
    //articleData = JSON.parse(article);
    //title = articleData[0]
    //title = title.dataArr;
     console.log(article);
    
    
    data.users.forEach(el => {
        console.log(el);
         let article = document.createElement('h2');
            user.innerHTML = `${el.articles}`;
            articlesArr.append(article);
    });
    console.log(data);
    //document.querySelector('#data').innerHTML = data.name; // передає  JSON в html
});


/*let data = null; 
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
    //document.querySelector('#data').innerHTML = data.name; // передає  JSON в html
});*/