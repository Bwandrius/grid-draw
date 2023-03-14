let colour = "black";

function fillGrid (size) {
    let gridContainer = document.querySelector('#grid-container');
    let gridCells = gridContainer.querySelectorAll('div');
    gridCells.forEach(div => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let gridCell = document.createElement('div');
        gridCell.addEventListener('mouseover', cellColourFill)
        gridCell.style.backgroundColor = 'white';
        gridContainer.insertAdjacentElement('beforeend', gridCell); 
    }
}

function changeSize (input) {
    if (input >= 2 && input <= 100) {
        fillGrid(input);
    } else {
        console.log('invalid input');
    }
}

function cellColourFill () {
    if (colour === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = colour;
    }    
}

function changeFillColour (choice) {
    colour = choice;
}
