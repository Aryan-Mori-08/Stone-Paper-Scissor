let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg")
let choices = document.querySelectorAll(".choice");
let usersc = document.querySelector("#user-score");
let compsc = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["Rock", "Paper", "Scissor"];
    let idx = Math.floor(Math.random()*3);

    return options[idx];
}

const drawGame = () =>{
    // console.log("game is draw");
    msg.innerText = "Game Draw";
}

const updateScore = (userWin) =>{
    if(userWin){
        userscore += 1;
        usersc.innerText = `${userscore}`;
    }else{
        compscore += 1;
        compsc.innerText = `${compscore}`;
    }
}

const checkWinner = (userWin) =>{
    if(userWin){
        // console.log("you win");
        msg.innerText = "You Win";
    }else{
        // console.log("you lose");
        msg.innerText = "You Lose";
    }
}


const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log(`user choice = ${userChoice} and computer Choice = ${compChoice}`);
    
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            // paper, Scissor
            userWin = compChoice === "Paper" ? false:true;
        }else if(userChoice === "Paper"){
            // rock, Scissor 
            userWin = compChoice === "Scissor"?  false:true;
        }
        else{
            // Rock, Paper
            userWin = compChoice === "Rock" ? false:true;
        }
        checkWinner(userWin);
        updateScore(userWin);
    }
    
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})