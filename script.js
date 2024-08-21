let btn = document.querySelector(".fa-bars");
let containers = document.querySelector(".container");

btn.addEventListener("click", ()=>{
    containers.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for(var i = 0; i < arrows.length ; i++) {
    arrows[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;

        arrowParent.classList.toggle("show")
    })
}

let list = document.querySelectorAll('.container li');
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');
let homecontainer = document.querySelector('.home-container');

toggle.onclick = function() {
    container.classList.toggle('active');
    homecontainer.classList.toggle('active');
}