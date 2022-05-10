var rollBtn, holdBtn, newGameBtn, diceNumber, diceImg, score, activePlayer, rand, dice, diceImg, rules;

rand = Math.random();
playerNumber = Math.round(rand);
if(playerNumber == 0){
    activePlayer = document.getElementById('player-1').classList.add('inactive');
}else{
    activePlayer = document.getElementById('player-0').classList.add('inactive');
}

rollBtn = document.getElementById('btn-roll');
holdBtn = document.getElementById('btn-hold');
newGameBtn = document.getElementById('btn-new-game');
rules = document.getElementById('rules-content');

diceImg = document.getElementById('dice');


rollBtn.addEventListener('click', function(){
    dice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = 'assets/images/dice-'+ dice +'.jpg';

    activePlayer = document.getElementById('player-' + playerNumber);
    score = document.getElementById('score-' + playerNumber);
    tempScore = document.getElementById('current-score-' + playerNumber);
    console.log(playerNumber);
    if(dice != 1){
        tempScore.innerHTML = parseInt(tempScore.innerHTML) + parseInt(dice);
        if(parseInt(score.innerHTML) >= 100) {
            winnerMsgPopUp();
        }
    }else{
        alert("You rolled on number 1.");
        if(playerNumber == 0){
            activePlayer.classList.add('inactive');
            playerNumber = 1;
            updateGamePlayer();
            activePlayer.classList.remove('inactive');
        }else{
            activePlayer.classList.add('inactive');
            playerNumber = 0;
            updateGamePlayer();
            activePlayer.classList.remove('inactive');
        }
        tempScore.innerHTML = 0;
    }
})

holdBtn.addEventListener('click', function(){
    score.innerHTML = parseInt(score.innerHTML) + parseInt(tempScore.innerHTML);
    if(parseInt(score.innerHTML) >= 100) {
        winnerMsgPopUp();
    }
    if(playerNumber == 0){
        activePlayer.classList.add('inactive');
        playerNumber = 1;
        updateGamePlayer();
        activePlayer.classList.remove('inactive');
    }else{
        activePlayer.classList.add('inactive');
        playerNumber = 0;
        updateGamePlayer();
        // activePlayer.classList.remove('inactive');
        activePlayer.classList.remove('inactive');
    }
    tempScore.innerHTML = 0;
})

function disableBtn() {
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    activePlayer = document.getElementById('player-' + playerNumber).style.filter = 'none';
}

newGameBtn.addEventListener('click', function(){
    window.location.reload();
})

rules.parentElement.addEventListener('click', function(){
    if(rules.style.display != 'block'){
        rules.style.display = 'block';
    }else{
        rules.style.display = 'none'
    }
})


function updateGamePlayer(){
    activePlayer = document.getElementById('player-' + playerNumber);
}

function winnerMsgPopUp(){
    document.getElementById('winner-message').style.display = 'block';
    document.getElementById('winner-message').innerHTML = "<p class='winner-player'>Player "+ (playerNumber + 1)  +" wins!</p>";
    document.getElementById('winner-message').style.backdropFilter = "blur(3px)";
}