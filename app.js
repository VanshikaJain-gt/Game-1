let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}
const drawGame = ()=>{ 
    msg.innerText = "Game was Draw! PLAY AGAIN." 
    msg.style.backgroundColor = "blue"; 
}
const showWinner = (userWin, userchoice, compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("YOU WIN!");
        msg.innerText = `YOU WIN! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore; 
        msg.innerText = `YOU LOSE. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) =>{
    console.log("user choice =", userchoice);
    const compChoice = gencompchoice();
    console.log("comp choice=", compChoice);
   
 if(userchoice === compChoice){
    drawGame();
 }  else{
    let userWin = true;
    if(userchoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userWin = compChoice === "scissors"? false : true;

    }else{
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin , userchoice , compChoice);
 } 
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        
    });
});