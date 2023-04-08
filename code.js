"use strict";

document.querySelector(".btn--new").textContent = "🔃New Game";
document.querySelector(".btn--hold").textContent = "🗃️Hold";
document.querySelector(".btn--roll").textContent = "🎲Roll Dice";
const players_ui = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
console.log(players_ui);
let dice = 0;
let player1_score = 0;
let player2_score = 0;
let curr = 0;
let check = false;

function player1_activate() {
  document.getElementById("current--0").textContent = curr;
  document.getElementById("current--1").textContent = 0;
  players_ui.classList.add("player--active");
  player2.classList.remove("player--active");
}

function player2_activate() {
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = curr;
  players_ui.classList.remove("player--active");
  player2.classList.add("player--active");
}
function checkStatus() {
  if (check) {
    player2_activate();
  } else {
    player1_activate();
  }
}
function updateScore() {
  if (!check) {
    player1_score += curr;
    if (player1_score >= 100)
      document.getElementById("name--0").textContent = "Player 1 Wins 🎉🎉";
    curr = 0;
    document.getElementById("score--0").textContent = player1_score;
  } else {
    player2_score += curr;
    if (player2_score >= 100)
      document.getElementById("name--1").textContent = "Player 2 Wins 🎉🎉";
    curr = 0;
    document.getElementById("score--1").textContent = player2_score;
  }
}

function rollTheDice() {
  dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  switch (dice) {
    case 1:
      document.querySelector(".dice").src = "dice-1.png";
      curr = 0;
      if (!check) check = true;
      else check = false;
      break;
    case 2:
      document.querySelector(".dice").src = "dice-2.png";
      curr += 2;
      break;
    case 3:
      document.querySelector(".dice").src = "dice-3.png";
      curr += 3;
      break;
    case 4:
      document.querySelector(".dice").src = "dice-4.png";
      curr += 4;
      break;
    case 5:
      document.querySelector(".dice").src = "dice-5.png";
      curr += 5;
      break;
    case 6:
      document.querySelector(".dice").src = "dice-6.png";
      curr += 6;
      break;
  }

  checkStatus();
}
 function holdButton() {
  updateScore(check);
  if (!check) check = true;
  else check = false;
  checkStatus();
};

function newGame(){

    curr = 0;
        document.getElementById("name--1").textContent = "Player 2";
        document.getElementById("name--0").textContent = "Player 1";
        player1_score = 0;
        player2_score = 0;
        document.getElementById("current--0").textContent = 0;
        document.getElementById("current--1").textContent = 0;
        document.getElementById("score--1").textContent = player2_score;
        document.getElementById("score--0").textContent = player1_score;
        player1_activate();
}