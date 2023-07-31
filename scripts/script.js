// Coloring on pad code

let squares = document.getElementById("squares");
let isMouseDown = false;

squares.addEventListener("mousedown", (event) => {
isMouseDown = true;
})

squares.addEventListener("mouseup", (event) => {
isMouseDown = false;
})

// SlideRange modification code +

let gridSize = 10;
createGrid();

let red = document.getElementById("color-red")
let myRange = document.getElementById("my-range");
console.log(myRange);

myRange.addEventListener("input", (event) => {
gridSize = parseInt(myRange.value);
console.log(gridSize);
createGrid();
});

function createGrid() {

    squares.innerHTML = "";

    let totalTiles = gridSize * gridSize;
    let tileSize = 500 / gridSize;

    for (i = 1; i <= totalTiles; i++) {
        let childTile = document.createElement("div");
        childTile.classList.add("tile");
        childTile.style.height = `${tileSize}px`;
        childTile.style.width = `${tileSize}px`;

        childTile.addEventListener("mouseover", (event) => {
            if (isMouseDown) {
            childTile.style.backgroundColor = "black";
            }
        })
        
        squares.appendChild(childTile);
    }
    
    squares.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
  squares.style.gridTemplateRows = `repeat(${gridSize}, ${tileSize}px)`;
  squares.style.height = `${gridSize * tileSize}px`;
  squares.style.width = `${gridSize * tileSize}px`;
    

}

