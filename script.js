/// rps
/*
rock wins against scissors
paper wins against rock
scissors wins against rock

CPU selects one of the options before the player has even made a descision.
45% to select rock
20% to select scissors
35% to select paper
create a seperate function that does the math for this.
*/ 

function randomGeneration(integerValue) {
    //to return a value between 1 -> intergerValue
    return Math.floor(Math.random() * integerValue) + 1; 
}

function cpuSelect () {
    const randomValue = randomGeneration(100);
    if(randomValue <= 35) {
        return "paper";
    }
    else if(randomValue > 35 && randomValue <= 55) {
        return "scissor";
    }
    else {
        return "rock";
    }
}

function playerSelectionLogic(playerSelection) {
    if(playerSelection === 'btn rock') {
        return "rock";
    }
    else if(playerSelection === 'btn paper') {
        return "paper";
    }
    else {
        return "scissor";
    }
}

const rock = "icons8-rock-50.png";
const paper = "icons8-paper-64.png";
const scissor = "icons8-scissor-64.png";

const choices = document.querySelectorAll('.btn');
const cpuChoice = document.querySelector('.cpu-choice');
const playerChoice = document.querySelector('.player-choice');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');

let cpuScoreVal = 0;
let playerScoreVal = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let playerSelected = choice.classList.value;
        const cpuFinal = cpuSelect();
        const playerFinal = playerSelectionLogic(playerSelected);

        if(cpuFinal === "rock" && playerFinal === "paper") {
            playerScoreVal += 1;
            playerScore.textContent = playerScoreVal;
            playerChoice.firstChild.nextSibling.src = paper;
            cpuChoice.firstChild.nextSibling.src = rock;
        }
        else if(cpuFinal === "paper" && playerFinal === "rock") {
            cpuScoreVal += 1;
            cpuScore.textContent = cpuScoreVal;
            playerChoice.firstChild.nextSibling.src = rock;
            cpuChoice.firstChild.nextSibling.src = paper;
        }
        else if(cpuFinal === "scissor" && playerFinal === "rock") {
            playerScoreVal += 1;
            playerScore.textContent = playerScoreVal;
            playerChoice.firstChild.nextSibling.src = rock;
            cpuChoice.firstChild.nextSibling.src = scissor;
        }
        else if(cpuFinal === "rock" && playerFinal === "scissor") {
            cpuScoreVal += 1;
            cpuScore.textContent = cpuScoreVal;
            playerChoice.firstChild.nextSibling.src = scissor;
            cpuChoice.firstChild.nextSibling.src = rock;
        }
        else if(cpuFinal === "paper" && playerFinal === "scissor") {
            playerScoreVal += 1;
            playerScore.textContent = playerScoreVal;
            playerChoice.firstChild.nextSibling.src = scissor;
            cpuChoice.firstChild.nextSibling.src = paper;
        }
        else if(cpuFinal === "scissor" && playerFinal === "paper") {
            cpuScoreVal += 1;
            cpuScore.textContent = cpuScoreVal;
            playerChoice.firstChild.nextSibling.src = paper;
            cpuChoice.firstChild.nextSibling.src = scissor;
        }
        else if(cpuFinal === playerFinal) {
            cpuScoreVal += 1;
            cpuScore.textContent = cpuScoreVal;
            playerScoreVal += 1;
            playerScore.textContent = playerScoreVal;
        }

    });
});


