const diceOne = document.getElementById("player1Dice");
const diceTwo = document.getElementById("player2Dice");
const score1Board = document.getElementById("player1Scoreboard");
const score2Board = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

let turn = true
let scoreOne = ""
let scoreTwo = ""

rollBtn.addEventListener("click", function () {
    let roll = Math.floor(Math.random() * 6)
    console.log(roll);

})

