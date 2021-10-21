const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const rainbowBtn = document.querySelector('.rainbow');
const blackBtn = document.querySelector('.black');
const greyBtn = document.querySelector('.grey');


function createGrid(num) {
    for(let i = 0;i < (num * num); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.appendChild(div).classList.add('grid')
    }
}

function fillBlack() {
    let div = document.querySelectorAll('.grid');
    div.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = "black";
        });
    });
}

function resetGrid() {
    let squares = resetPrompt();
    container.innerHTML = '';
    createGrid(squares);
    fillBlack();
}

function resetPrompt() {
    let squares = parseInt(prompt("How many rows would you like the grid to have? Please enter a number from 1 to 100:"));

    if (squares < 0 || squares > 100 || !squares) {
        squares = 16;
    }
    
    return squares;
}

function fillRainbow() {
    let div = document.querySelectorAll('.grid');
    div.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);

            let rainbow = `rgb(${R}, ${G}, ${B})`;
            grid.style.background = rainbow;
        });
    });   
}

function fillGrey() {
    let div = document.querySelectorAll('.grid');
    div.forEach(grid => {
        let shade = 255;
        grid.addEventListener('mouseover', () => {
            shade -= 25;
            grid.style.background = `rgb(${shade}, ${shade}, ${shade})`;
        });
    });   
}


createGrid(16);
fillBlack();
resetBtn.addEventListener('click', resetGrid);
rainbowBtn.addEventListener('click', fillRainbow);
blackBtn.addEventListener('click', fillBlack);
greyBtn.addEventListener('click', fillGrey);