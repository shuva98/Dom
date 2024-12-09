// Dom changing styles

let divs = document.querySelectorAll(".box");

divs[1].style.backgroundColor = "red";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.padding = "20px";
newBtn.style.margin = "30px";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);
document.body.appendChild(newBtn);

let content = document.querySelector(".para");

content.classList.add("newclass");
let sBtn = document.body.appendChild(document.createElement("button"));

sBtn.innerText = "Press me!";
