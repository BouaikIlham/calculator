let number1 = document.getElementById("number1")
let calcul = document.getElementById("calcul")
let number2 = document.getElementById("number2")
let result = document.getElementById("result")
let btn = document.getElementById("calculate")



btn.addEventListener("click", () => {
    if (calcul.value === "+"){
        result.innerHTML = Number(number1.value) + Number(number2.value)
    }
    else if (calcul.value === '/'){
       result.innerHTML = number1.value / number2.value
    }
    else if (calcul.value === '-'){
        result.innerHTML = number1.value - number2.value
    }
    else if (calcul.value === '*'){
        result.innerHTML = number1.value * number2.value
    }
    else {
        result.innerHTML = "error"
    }
       
   

})




    






