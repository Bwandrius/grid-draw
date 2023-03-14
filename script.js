function fillGrid(size){
    let gridContainer = document.querySelector('#grid-container');
    let gridCells = gridContainer.querySelectorAll('div');
    gridCells.forEach(div => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    console.log(gridContainer);

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let gridCell = document.createElement('div');
        gridCell.addEventListener('mouseover', cellColour)
        gridCell.style.backgroundColor = 'white';
        gridContainer.insertAdjacentElement('beforeend', gridCell); 
    }
}

function cellColour (){
    gridCell.style.backgroundColor = 'black';
}

function changeSize(input){

    if (input >= 2 && input <= 100) {
        fillGrid(input);
    } else {
        console.log('invalid input');
    }

    
}

// function makeGrid (rows, cols) {

//     for (let i = 0; i < rows; i++) {
//         let gridRow = document.createElement("div");
//         gridRow.classList.add("grid-row");

//         for (let j = 0; j < cols; j++) {
//             let gridCell = document.createElement("div");
//             gridCell.classList.add("grid-cell");

//             gridRow.appendChild(gridCell);
//         }

//         gridContainer.appendChild(gridRow);
//     }
// }

// makeGrid(16, 16);