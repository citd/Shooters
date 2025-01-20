const addBtn = document.querySelector(".addBtn");
const resetBtn = document.querySelector(".resetBtn");
const diceBtn = document.querySelector(".diceBtn");
const nextBtn = document.querySelector(".nextBtn");
const action = document.querySelector(".action");
const player = document.querySelector(".player");
const diceResult = document.querySelector("result");
let num = 0;
let turnCounter = 0;


const whoDrinks = {
  0:  "Roll the Dice",
  1:  "Take a Shot",
  2:  "Choose one person to take a shot",
  3:  "The person next to you takes a shot",
  4:  "Everybody takes a shot",
  5:  "The first person to move takes two shots",
  6:  "Finish your drink",
  7:  "Call someone and sing happy birthday",
  8:  "Let someone text a random emoji to your last conversation",
  9:  "Take a sip from everyone's drink",
  10: "Put an ice cube down your shirt, leave it until it melts",
  11: "Play rock-paper-scissors with anyone, loser takes a shot",
  12: "Choose any word and everybody, except you, has to drink every time you say it"
}

let playersList = [];

addBtn.onclick = function(){
  playersList.push(window.prompt("What is your name?"));
  if(playersList[0] === "Add player") playersList.shift();
}

diceBtn.onclick = function(){
  num = Math.floor(Math.random() * 12) + 1;
  action.textContent = whoDrinks[num];
}

nextBtn.onclick = function(){
  num = 0;
  action.textContent = whoDrinks[num];
  player.textContent = playersList[turnCounter];
  turnCounter++;
  if(turnCounter === playersList.length) turnCounter = 0;
}

resetBtn.onclick = function(){
  playersList = ["Add player"];
  player.textContent = playersList[0];
}