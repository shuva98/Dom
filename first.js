// Events

let newBtn = document.body.appendChild(document.createElement("button"));

newBtn.innerText = "Click me to change to dark mode or light mode.";
newBtn.style.color = "green";
newBtn.style.backgroundcolor = "cyan";
newBtn.style.padding = "20px";
newBtn.style.margin = "10px 300px";
let currmode = "light";

newBtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document
      .querySelector("body")
      .setAttribute("style", "background-color:black;");
  } else {
    currmode = "light";
    document
      .querySelector("body")
      .setAttribute("style", "background-color:white;");
  }
  console.log(`Your current mode is ${currmode}`);
});
