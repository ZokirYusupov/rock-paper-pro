const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resualtDisplay =  document.getElementById('resualt')
const possibleChoices = document.querySelectorAll('button');
let computerTotal = document.querySelector('#computer-total'),
userTotal = document.querySelector('#user-total'),
drawTotal = document.querySelector('#draw-total');

let compT = 0
let userT = 0
let drawT = 0

let userChoice;
let computerChoice;
let resualt;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  if( e.target.id === 'restart'){
     location.reload()
  }else{
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResualt()
  }
})
)
function generateComputerChoice(){
   const randomNumber = Math.floor( Math.random() * 3 ) + 1
   // console.log(randomNumber);
   if(randomNumber === 1){
      computerChoice = 'rock'
   }
   if(randomNumber === 2){
      computerChoice = 'scissors'
   }
   if(randomNumber === 3){
      computerChoice = 'paper'
   }
   computerChoiceDisplay.innerHTML = computerChoice;
}

function getResualt() {
   if(computerChoice === userChoice){
      resualt = 'its a draw '
      drawT++
   }
   if(computerChoice === 'rock' && userChoice === 'paper'){
      resualt = 'you win'
      userT++
   }
   if(computerChoice === 'rock' && userChoice === 'scissors'){
      resualt = 'you lost'
      compT++
   }
   if(computerChoice === 'paper' && userChoice === 'scissors'){
      resualt = 'you win'
      userT++
   }
   if(computerChoice === 'paper' && userChoice === 'rock'){
      resualt = 'you lose'
      compT++
   }
   if(computerChoice === 'scissors' && userChoice === 'rock'){
      resualt = 'you win'
      userT++
   }
   if(computerChoice === 'scissors' && userChoice === 'paper'){
      resualt = 'you lose'
      compT++
   }
   resualtDisplay.innerHTML = resualt;
   computerTotal.innerHTML = compT
   userTotal.innerHTML = userT
   drawTotal.innerHTML = drawT
}