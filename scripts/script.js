let squares = document.getElementById("squares");
let isMouseDown = false;

squares.addEventListener("mousedown", (event) => {
isMouseDown = true;
})

squares.addEventListener("mouseup", (event) => {
isMouseDown = false;
})

let gridSize = 256;

for (i = 1; i <= gridSize; i++) {
let childTile = document.createElement("div");
childTile.classList.add("tile");

childTile.addEventListener("mouseover", (event) => {
    if (isMouseDown) {
 childTile.setAttribute("style", "background-color: blue;");
    }
})
squares.appendChild(childTile);
};