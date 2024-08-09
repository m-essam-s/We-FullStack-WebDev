function TaskGuessing() {
    var guess = prompt("Guess a number between 1 and 10");
    if (guess == 7) {
        alert("You guessed right!");
    } else if (guess == 6 || guess == 8) {
        alert("You were very very close!");
    }
    else if (guess == 5 || guess == 9) {
        alert("You were very close!!!");
    }
    else if (guess == 4 || guess == 10) {
        alert("You were close!!!!");
    }
    else {
        alert("You guessed wrong!");
    }
}


function RealGuessing() {
    var random = Math.floor(Math.random() * 10) + 1;
    var guess = prompt("Guess a number between 1 and 10");
    if (guess == random) {
        alert("You guessed right!");
    } else {
        alert("You guessed wrong! The number was " + random);
    }
}