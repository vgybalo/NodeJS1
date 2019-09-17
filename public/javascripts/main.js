const button = document.getElementById("submit");

button.addEventListener('click',(e) => {
    e.preventDefault();    
    
    let model= document.getElementById("car_model").value;
    let price = document.getElementById("car_price").value;
    
    const car = JSON.stringify( {model: model, price: price});
    //console.log(car);

    const xhr = new XMLHttpRequest(); 
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json");//header
   
    xhr.send(car);    
    
})






