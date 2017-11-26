window.addEventListener("load", menu);

function menu(){
    document.getElementById("menu-btn").addEventListener("click", toggleMenu);
}

function toggleMenu(){
    var elem = document.getElementById("header");
    elem.classList.toggle("active");
}