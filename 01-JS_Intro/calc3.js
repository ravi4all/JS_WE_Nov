window.addEventListener("load", init);

var firstnumber;
var secondnumber;

function init(){
    firstnumber = document.getElementById("fnum");
    secondnumber = document.getElementById("snum");
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calculator);
    }
}

function calculator(event){
    var opr = event.srcElement.value;
    var result;
    // console.log(opr);
    result = eval(firstnumber.value + opr + secondnumber.value);
    // console.log(result);
    document.getElementById("result").innerHTML = result;
}