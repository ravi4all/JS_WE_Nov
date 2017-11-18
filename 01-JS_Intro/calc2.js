window.addEventListener("load", init);

var firstnumber;
var secondnumber;

function init(){
    firstnumber = document.getElementById("fnum");
    secondnumber = document.getElementById("snum");
    document.getElementById("add").addEventListener("click", calculator);
    document.getElementById("sub").addEventListener("click", calculator);
    document.getElementById("div").addEventListener("click", calculator);
    document.getElementById("mul").addEventListener("click", calculator);
}

function calculator(event){
    var elem = event.srcElement.value;
    var result;
    // console.log(elem);
    if (elem == "+"){
        result = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    }
    else if (elem == "-"){
        result = parseInt(firstnumber.value) - parseInt(secondnumber.value);
    }
    else if(elem == "/"){
        result = parseInt(firstnumber.value) / parseInt(secondnumber.value);
    }
    else {
        result = parseInt(firstnumber.value) * parseInt(secondnumber.value);
    }
    document.getElementById("result").innerHTML = result;
}