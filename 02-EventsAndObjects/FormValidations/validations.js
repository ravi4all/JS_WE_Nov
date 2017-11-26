window.addEventListener("load", init);

var userName;
var userMail;
var userPwd;
var confPwd;

function init(){
    userName = document.getElementById("box_1");
    userMail = document.getElementById("box_2");
    userPwd = document.getElementById("box_3");
    confPwd = document.getElementById("box_4");
    span = document.getElementsByTagName("span");
    userName.addEventListener("blur", blankCheck);
    userPwd.addEventListener("keyup", pwdStrength);
    confPwd.addEventListener("keyup", confirmPwd);
    userMail.addEventListener("keyup", checkMail);
}

function blankCheck(){
    if(userName.value == ""){
        span[0].innerHTML = "You cannot leave this blank";
        userName.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        userName.style.border = "1px solid green";
    }
}

function pwdStrength(){
    if(userPwd.value.length <= 0) {
        span[2].innerHTML = "Fill this field";
    }
    else if(userPwd.value.length > 0 && userPwd.value.length <= 4){
        span[2].innerHTML = "Weak Password";
        span[2].className = "red";
    }
    else if(userPwd.value.length > 4 && userPwd.value.length <= 8){
        span[2].innerHTML = "Average Password";
        span[2].className = "yellow";
    }
    else if(userPwd.value.length > 8){
        span[2].innerHTML = "Strong Password";
        span[2].className = "green";
    }
    else {
        span[2].innerHTML = "";
    }
}

function confirmPwd(){
    if(userPwd.value == confPwd.value) {
        span[3].innerHTML = "Password Match";
    }
    else {
        span[3].innerHTML = "Password do not Match";
    }
}

function checkMail(){
    str = userMail.value;
    if(!isValid(str)){
        span[1].innerHTML = "Not Valid";
        console.log(isValid(str));
    }
    else {
        span[1].innerHTML = "Valid";
        console.log(isValid(str));
    }
}

function isValid(str){
    // return (/^\s*$/.test(str.value))
    return (/(\w+[@]+\w+[.]+\w+)$/.test(str))
}