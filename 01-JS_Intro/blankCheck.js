window.addEventListener("load", validation);

var str;

function validation(){
    str = document.getElementById("box_1");
    document.getElementById("btn").addEventListener("click", validate);
}

function validate(){
    var span = document.getElementById("err");

    // First Way
    // if(str.value == ""){
    //     span.innerHTML = "You cannot leave this field";
    // }
    // else {
    //     span.innerHTML = "Proceed";
    // }

    // Second Way
    // if(str.value.length <= 0){
    //     span.innerHTML = "You cannot leave this field";
    // }
    // else {
    //     span.innerHTML = "Proceed";
    // }

    // Third Way
    // if(!isEmpty(str)){
    //     span.innerHTML = "You cannot leave this field";
    //     console.log(isEmpty(str));
    // }
    // else {
    //         span.innerHTML = "Proceed";
    //         console.log(isEmpty(str));
    // }

    // Fourth Way
    if(isValid(str)){
        span.innerHTML = "You cannot leave this field";
        console.log(isValid(str));
    }
    else {
            span.innerHTML = "Proceed";
            console.log(isValid(str));
    }
}

// function isEmpty(str){
//     return (str.value === undefined || str.value == "" || str.value == null) ? false : true;
// }


function isValid(str){
    // return (/^\s*$/.test(str.value))
    return (/([^\s*])$/.test(str.value))
}