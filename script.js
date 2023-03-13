let gridContainer = document.querySelector('#grid-container');
console.log(gridContainer);

function makeGrid (rows, cols) {

    for (let i = 0; i < rows; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < cols; j++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");

            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
}

makeGrid(16, 16);