let input1 = document.querySelector('#login');
let input2 = document.querySelector('#password');
let button = document.querySelector('#button');

let  login = null;
let password = null;
button.addEventListener("click", () => {
    login = input1.value;
    password = input2.value;
    
    console.log (login);
    console.log (password);
    });


let load = {
    login: login,
    password: password
};

var data = new FormData();
data.append( "json", JSON.stringify( load ) );

fetch("/",
{
    method: "POST",
    body: data
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( data ) ) })