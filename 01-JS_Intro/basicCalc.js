window.addEventListener("load", init);

var firstnumber;
var secondnumber;

function init(){
    firstnumber = document.getElementById("fnum");
    secondnumber = document.getElementById("snum");
    document.getElementById("add").addEventListener("click", addition);
    document.getElementById("sub").addEventListener("click", subtraction);
    document.getElementById("div").addEventListener("click", division);
    document.getElementById("mul").addEventListener("click", multiplication);
}

function addition(){
    var result = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    console.log(firstnumber.value, secondnumber.value);
    console.log("Result is",result);
    document.getElementById("result").innerHTML = result;
}

function subtraction(){
    var result = parseInt(firstnumber.value) - parseInt(secondnumber.value);
    document.getElementById("result").innerHTML = result;
}

function division(){
    var result = parseInt(firstnumber.value) / parseInt(secondnumber.value);
    document.getElementById("result").innerHTML = result;
}

function multiplication(){
    var result = parseInt(firstnumber.value) * parseInt(secondnumber.value);
    document.getElementById("result").innerHTML = result;
}