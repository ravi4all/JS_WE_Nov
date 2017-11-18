// Event Binding
window.addEventListener("load", init);

function init(){
    // Event Binding
    // Callback
    document.getElementById("btn").addEventListener("click", show);
}

function show(){
    console.log("Show function executed...");
    // window.alert("Hello JS");
    var userName = document.getElementById("box_1").value;
    // console.log(userName);
    // document.write(userName);
    document.getElementById("result").innerHTML = userName;
}