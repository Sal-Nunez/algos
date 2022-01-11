function randomMove() {
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function rockPaperScissors(userMove, computerMove) {
    noWinner = false;
    if (userMove == computerMove)
        return "No Winner!"
}
if (userMove == "Rock") {
    if (computerMove == "Paper") {
        return "Paper Beats Rock, Computer Wins!"
    } else {
        return "Rock beats Scissors, User Wins"
    }
}
if (userMove == "Paper") {
    if (computerMove == "Scissors") {
        return "Scissors beats Paper, Computer Wins!"
    } else {
        return "Rock beats Paper, User Wins"
    }
}
if (userMove == "Scissors") {
    if (computerMove == "Paper") {
        return "Scissors beats Paper, User Wins!"
    } else {
        return "Rock beats Scissors, Computer Wins!"
    }
}
console.log(rockPaperScissors(randomMove(), randomMove()));