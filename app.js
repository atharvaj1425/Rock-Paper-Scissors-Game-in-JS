let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("The game was draw");
  msg.innerText = "The game was draw. Play again!!";
  msg.style.backgroundColor = "#081b31";
};

const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win!!");
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You WIN. ${userChoice} beats ${compChoice}!!`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer win!!");
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `You LOST. ${compChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
  console.log("User's choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rck, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
