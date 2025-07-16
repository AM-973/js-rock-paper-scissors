/*------------ Constants ------------------*/
const choices = ['rock', 'paper', 'scissors']
const resultDisplayEl = document.querySelector('#result-display')
const resetBtnEl = document.querySelector('#resetButton')
const allBtns = document.querySelectorAll('.game-button')
console.log(allBtns)
/*------------- Variables -----------------*/
let msg
let playerChoice
let computerChoice


/*------ Cached Element References ---------*/
allBtns.forEach((btn)=>{
    btn.addEventListener('click', play)
})
/*-------- Functions -----------------------*/

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function play() {
    computerChoice = getComputerChoice()
    playerChoice = event.target.id
    compare()
    render()
}


function compare() {
    if (playerChoice === computerChoice) {
        msg = "It's a tie!";
    }
    else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        msg = "You win!";
    }
    else if (playerChoice === choices[1] && computerChoice === choices[0]) {
        msg = "You win!";
    }
    else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        msg = "You win!";
    }
    else {
        msg = "You lost.";
    }
}

const render = () => {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}

function resetGame() {
    resultDisplayEl.textContent = ''
    playerChoice = null
    computerChoice = null

}
/*--------- Event Listeners ----------------*/
resetBtnEl.addEventListener('click', resetGame)