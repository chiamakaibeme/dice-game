/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, currentScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1) {
            currentScore += dice;
            document.getElementById('current-' + activePlayer). textContent = currentScore;
        }  else {

            nextPlayer();
        }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        score[activePlayer] += currentScore;
    
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        
    }
    
    
    if(score[activePlayer] >= 50) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!!'
        document.querySelector('.dice').style.display = 'none';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
        gamePlaying = false;
        
        
//        document.querySelector('.btn-roll').style.display = 'none';
//        document.querySelector('.btn-hold').style.display = 'none';
    } else {
        
       nextPlayer(); 
        
    }
});


function nextPlayer() {
    
    currentScore = 0;

    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';

    setTimeout(disp, 1500);
}


function disp() {
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
}


document.querySelector('.btn-new').addEventListener('click', function() {
    
    
    
    init();
    
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    
});


function init() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}



