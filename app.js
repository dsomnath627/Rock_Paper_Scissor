let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice =()=>{
  const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];

  //rock,paper,scissor

}

const drawGame = () =>{
  msg.innerText="game was draw. try again";
  msg.style.backgroundColor ="pink";

}
const showWinner = (userWin, userChoice, compChoice) =>{
  if (userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText= `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `you lose. your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor ="red";
  }

}
const playGame = (userChoice)=>{
   // Generate computer choice ->modular.
   const compChoice = genCompChoice();

   if(userChoice === compChoice){
    // Draw Game
    drawGame();

   } else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const  userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});