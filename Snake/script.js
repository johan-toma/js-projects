let blockSize = 20;
let rows = 30;
let columns = 30;
let board;
let drawingObject;



class Snake {
    constructor(X, Y, Color, Size) {
        this.X = X;
        this.Y = Y;
        this.Color = Color;
        this.Size = Size;
    }
}

class Food {
    constructor(X, Y, Grow, Color) {
        this.X = X;
        this.Y = Y;
        this.Grow = Grow;
        this.Color = Color;
    }
}


let snakeCharacter = new Snake(blockSize * 5, blockSize * 5, "lime", 1);
let smallFood = new Food(randomCoordinates(rows, blockSize), randomCoordinates(columns, blockSize), 1, "yellow");

let vX = 0;
let vY = 0;

window.addEventListener('load', () => {
    board = document.querySelector('.game-board');
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    drawingObject = board.getContext("2d");

    
    document.addEventListener("keyup", changeDirection);
    
    setInterval(update, 80);
});


function update() {

    if(snakeCharacter.X == smallFood.X && snakeCharacter.Y == smallFood.Y) {
        smallFood.X = randomCoordinates(rows, blockSize);
        smallFood.Y = randomCoordinates(columns, blockSize);
        snakeCharacter.Size += smallFood.Grow;
    }

    drawingObject.fillStyle = "black";
    drawingObject.fillRect(0, 0, board.width, board.height);
    //places food
    drawingObject.fillStyle = smallFood.Color;
    drawingObject.fillRect(smallFood.X, smallFood.Y, blockSize, blockSize);

    drawingObject.fillStyle = snakeCharacter.Color;

    snakeCharacter.X += vX* blockSize;
    snakeCharacter.Y += vY * blockSize;

    for(let i = 0; i < snakeCharacter.Size; i++) {
        
    }
}


function randomCoordinates(max, block) {
    return Math.floor(Math.random()* max) * block;
}

function changeDirection(e) {
    if(e.code === "ArrowUp" && vY != 1) {
        vX= 0;
        vY = -1;
    }
    else if(e.code === "ArrowDown" && vY != -1) {
        vX= 0;
        vY = 1;
    }
    else if(e.code === "ArrowLeft" && vX != 1) {
        vX= -1;
        vY = 0;
    }
    else if(e.code === "ArrowRight" && vX != -1) {
        vX= 1;
        vY = 0;
    }
}