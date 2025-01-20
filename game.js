let comScore=0;
let userScore=0;;

let  choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const score = document.querySelector("#user-score");
const comsc=document.querySelector("#comp-score");
const reset=document.querySelector("#reset");


choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const choiceId =choice.getAttribute("id");
      
      playGame(choiceId );
    });
  });
    

const compChoice=()=>{
    const option=["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    return option[randomIdx];
};
   
const showWinner = (userWin, choiceId, pgm) => {
    if (userWin) {
        userScore++
        score.innerText=userScore;

       
        msg.innerText = `You Win! Your ${choiceId} beats ${pgm}`;
        msg.style.backgroundColor = "blue";
    } else {
        comScore++;
        comsc.innerText=comScore;
    
        msg.innerText = `You Lose! ${pgm} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";}
        over()
    };


let draw=()=>{
    
    msg.innerText="Its Draw";
    msg.style.backgroundColor="green";

};



const playGame=(choiceId)=>{
  
    const pgm=compChoice()
   
    if(choiceId===pgm){
        draw();
    }else{
        let userWin=true;
        if(choiceId==="rock"){
            userWin=pgm==="paper"? false: true;

        }else if(choiceId==="paper"){
            userWin=pgm==="scissors"?false:true;        
        }else  {
            userWin=pgm==="rock"?false : true;
        }
        
        showWinner(userWin, choiceId, pgm);
    }
    };


reset.addEventListener("click", () => {
    comScore = 0;
    userScore = 0;
    score.innerText = userScore;
    comsc.innerText = comScore;
    msg.innerText = "Play Your Move";
   
});




