const diceOne = document.getElementById("dice1");
const diceTwo = document.getElementById("dice2");
const score1Board = document.getElementById("player1Scoreboard");
const score2Board = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const dice = document.getElementsByClassName("dice");
const pickPlayer = document.getElementById("pick-player");
let player = document.getElementById("up-first");
let box1 = document.getElementsByClassName("box1")

let player1Turn = true
let scoreOne = 0
let scoreTwo = 0



pickPlayer.addEventListener("click", function () {
    reset()
    randome()
})

function randome() {
    let firstPlayer = Math.floor(Math.random() * 2) + 1
    if (firstPlayer === 1) {
        player.textContent = "player 1"
        message.textContent = "Player 1 Turn"
        player1Turn = true
        diceTwo.classList.remove("active")
        diceOne.classList.add("active")
    } else {
        player.textContent = "player 2"
        player1Turn = false
        message.textContent = "Player 2 Turn"
        diceOne.classList.remove("active")
        diceTwo.classList.add("active")

    }
}

rollBtn.addEventListener("click", function () {

    const roll = Math.floor(Math.random() * 6) + 1
    if (player1Turn === true) {
        scoreOne += roll
        score1Board.textContent = scoreOne
        diceOne.textContent = roll
        diceOne.classList.remove("active")
        diceTwo.classList.add("active")
        message.textContent = "Player 2 Turn"


    } else {
        scoreTwo += roll
        diceTwo.textContent = roll
        score2Board.textContent = scoreTwo
        diceTwo.classList.remove("active")
        diceOne.classList.add("active")
        message.textContent = "Player 1 Turn"
    }


    if (scoreOne >= 20) {
        message.textContent = "Player 1 Wins"
        display()
    } else if (scoreTwo >= 20) {
        message.textContent = "Player 2 Wins"
        display()
    }

    player1Turn = !player1Turn

})

function resetShadow() {
    diceTwo.classList.remove("active")
    diceOne.classList.add("active")
}
resetBtn.addEventListener("click", function () {
    reset()
    randome()
})

function reset() {
    score1Board.textContent = 0
    score2Board.textContent = 0
    message.textContent = "Player 1 Turn"
    scoreOne = 0
    scoreTwo = 0
    diceOne.textContent = "-"
    diceTwo.textContent = "-"
    player1Turn = true
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    resetShadow()
}

function display() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

