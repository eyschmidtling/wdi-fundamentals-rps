////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var playerMove = getPlayerMove();
    console.log("Player: " + playerMove);
    var computerMove = getComputerMove();
    console.log("Computer: " + computerMove);
    if (playerMove === computerMove) {
    	winner = "tie";
    }
    else if(playerMove === "rock") {
        switch(computerMove) {
            case "paper":
                winner = "computer";
                break;
            default:
                winner = "player";
        }
    }
    else if(playerMove === "paper") {
        switch(computerMove) {
            case "rock":
                winner = "player";
                break;
            default:
                winner = "computer";
        }
    }
    else {
        switch(computerMove) {
            case "rock":
                winner = "computer";
                break;
            default:
                winner = "player";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    console.log();
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins < 5 && computerWins < 5) {
        var winner = getWinner();
        if(winner === "player") {
            console.log("Player wins this round!");
            playerWins += 1;
            console.log("Player " + playerWins + ", " + "Computer " + computerWins);
            console.log();
        }
        else if(winner === "computer") {
            console.log("Computer wins this round!");
            computerWins += 1
            console.log("Player " + playerWins + ", " + "Computer " + computerWins);
            console.log();
        }
        else {
            console.log("This round is a draw!");
            console.log("Player " + playerWins + ", " + "Computer " + computerWins);
            console.log();
    	   }
    }
    if(playerWins === 5) {
        console.log("PLAYER WINS!");   
    }
    else {
        console.log("COMPUTER WINS!");
    }    
return [playerWins, computerWins];
}

playToFive();