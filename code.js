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
let curr=0;
let check = false;
function rolldice() {
  dice = Math.trunc(Math.random() * 6 + 1);
}
function player1_activate(){

    document.getElementById('current--0').textContent = curr;
     document.getElementById('current--1').textContent = 0;
    players_ui.classList.add("player--active");
    player2.classList.remove("player--active");

}

function player2_activate(){

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    players_ui.classList.remove("player--active");
    player2.classList.add("player--active");

}
function check_status(){
    if (check) {
    
        player2_activate();
      
      } else {
     
        player1_activate();
      
      }
}
function update_score(){


if (!check){

    player1_score+=curr;
    curr = 0;
    document.getElementById('score--0').textContent=player1_score;
}
else{

    player2_score+=curr;
    curr = 0;
    document.getElementById('score--1').textContent=player2_score;

};
}

document.querySelector(".btn--roll").addEventListener("click", function () {
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
      curr+=2;
      break;
    case 3:
      document.querySelector(".dice").src = "dice-3.png";
      curr+=3;
      break;
    case 4:
      document.querySelector(".dice").src = "dice-4.png";
      curr+=4;
      break;
    case 5:
      document.querySelector(".dice").src = "dice-5.png";
      curr+=5;
      break;
    case 6:
      document.querySelector(".dice").src = "dice-6.png";
      curr+=6;
      break;
  }
   
  check_status();
});
document.querySelector(".btn--hold").addEventListener("click", function () {

    
    update_score(check);
    if (!check)check=true;
    else check = false;
    check_status();
     
});
