const computerChoice = ["rock","paper","scissors"];


const yourscore =  0;
const computerscore = 0;

function playRound(){
    
//step 1 -->tack input from user 
const userInput = prompt("Enter Your Choice (rock ,paper ,scissors)");

// console.log(userInput);

//step 2 --> tack input from computer
const randomIndex =Math.floor(Math.random()*3);

const computerInput = computerChoice[randomIndex];


// console.log(userInput);
// console.log(computerInput);
//step 3 -->

if((userInput==="rock" && computerInput==="scissors")||
    (userInput==="paper" && computerInput==="rock")||
    (userInput==="scissors" && computerInput==="paper")
){
    yourscore++;
}else if((computerInput==="rock" && userInput==="scissors")||
    (computerInput==="paper" && userInput==="rock")||
    (computerInput==="scissors" && userInput==="paper")
){
    computerscore++;
}else{
    alert("game tie nobody won");
}


}

for(let i=0 ;i<=5;i++){
    playRound();
    if(i===5){
        if(userscore >computerscore){
            alert("congratulation,you won");
        }
    }else{
        alert("you loose");
    }
}





