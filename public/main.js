let name = document.querySelector('#name');
let age = document.querySelector('#age');
let submit = document.querySelector('#submit');

let name = null;
let age = null;


input1.addEventListener('change', function () {
    name = name.value;
        });
input2.addEventListener('change', function () {
    age = age.value;
    
});




calculate = {
     numb1 : number1,
     numb2 : number2,
    result : null,

        add : function  () {
        result = number1 + number2;
        console.log(result);
    },
        minus : function  () {
        result = number1 - number2;
        console.log(result);
    },
        mult : function  () {
        result = number1 * number2;
        console.log(result);
    },
        devide : function  () {
        result = number1 / number2;
        console.log(result);
    },
        display : function  () {
        output.value = result;
    }

};


add_oper.addEventListener('click', calculate.add );
minus_oper.addEventListener('click', calculate.minus );
mult_oper.addEventListener('click', calculate.mult );
div_oper.addEventListener('click', calculate.devide );
calculate_oper.addEventListener('click',  calculate.display );
