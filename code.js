'use strict';

document.querySelector('.btn--new').textContent='🔃New Game';
document.querySelector('.btn--hold').textContent='🗃️Hold';
document.querySelector('.btn--roll').textContent='🎲Roll Dice';
const players_ui = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');;
console.log(players_ui);
let dice = 0
let player1_score = 0;
let player2_score = 0;
let check = false;
function rolldice(){

    dice = Math.trunc(Math.random()*6+1);
   
}
document.querySelector('.btn--roll').addEventListener('click',function(){
    dice = Math.trunc(Math.random()*6+1);
   console.log(dice);
    switch(dice){

        case 1:
            document.querySelector('.dice').src='dice-1.png';
            player1_score = 0;
           
           if (!check) 
                check = true;
           else
                check = false;
            break;
        case 2:
            document.querySelector('.dice').src='dice-2.png';
            player1_score++;
            break;
        case 3:
            document.querySelector('.dice').src='dice-3.png';
            player1_score++;
            break; 
        case 4:
            document.querySelector('.dice').src='dice-4.png';
            player1_score++;
            break;
        case 5:
            document.querySelector('.dice').src='dice-5.png';
            player1_score++;
            break;
        case 6:
            document.querySelector('.dice').src='dice-6.png';
            player1_score++;
            break;                  

    }
   document.querySelector('.current-score').textContent =player1_score;
   if (check){
    players_ui.classList.remove('player--active');
    player2.classList.add('player--active');
     

   }else{
    players_ui.classList.add('player--active');
    player2.classList.remove('player--active');
   }
  
}

);
document.querySelector('.btn--hold').addEventListener('click',function(){



});

