let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result_p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//RANDOM
getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.round(Math.random() * 3);
    return choices[randomNumber];
}

convertToWord = (letter) => {
    if (letter === 'r') {
        return 'Rock ';
    } else if (letter === 'p') {
        return 'Paper ';
    } else return 'Scissors';
}

win = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} user beats, ${convertToWord(computerChoice)} PC - you win`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('green-glow')
    }, 500)
}

lose = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} looses to PC, ${convertToWord(computerChoice)} you lost :(`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('red-glow')
    }, 500)
}

draw = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `DRAW !!!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('grey-glow')
    }, 500)
}



//GAME LOGIC
game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
            ;
        case "pr":
            ;
        case "sp":
            ;
            win(userChoice, computerChoice);
            console.log('user wins');
            break;

        case "rp":
            ;
        case "ps":
            ;
        case "sr":
            ;
            lose(userChoice, computerChoice);
            break;

        case "rr":
            ;
        case "pp":
            ;
        case "ss":
            ;
            draw(userChoice, computerChoice);
            break;
    }
}

//MAIN
main = () => {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");

    })
}
main();