const diceOne = document.getElementById("player1Dice");
const diceTwo = document.getElementById("player2Dice");
const score1Board = document.getElementById("player1Scoreboard");
const score2Board = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

let player1Turn = true
let scoreOne = 0
let scoreTwo = 0

rollBtn.addEventListener("click", function () {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
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

resetBtn.addEventListener("click", function () {
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
})

function display() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

