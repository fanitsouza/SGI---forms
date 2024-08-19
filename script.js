let btn = document.querySelector(".fa-bars");
let container = document.querySelector(".container");

btn.addEventListener("click", ()=>{
    container.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for(var i = 0; i < arrows.length ; i++) {
    arrows[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;

        arrowParent.classList.toggle("show")
    })
}