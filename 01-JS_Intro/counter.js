window.addEventListener("load", counter);

var count = 0;

function counter(){
    document.getElementById("inc").addEventListener("click", incCounter);
    document.getElementById("dec").addEventListener("click", decCounter);
}

function incCounter(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

function decCounter(){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}