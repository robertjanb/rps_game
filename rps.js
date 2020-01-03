// Computer's selection
function computerPlay() {
    var selectionArr = ['rock', 'paper', 'scissors'];
    return selectionArr[Math.floor(Math.random() * selectionArr.length)];
  };
  
  // Points initialize
  var w = 0;
  var l = 0;
  
  // Play a single round
  function playRound(playerSelection, computerSelection) {      
    if (playerSelection.toLowerCase() === 'rock') {
      if (computerSelection === 'scissors') {
        return 'You Win! Rock beats scissors.';
        w++;
      } else if (computerSelection === 'paper') {
        return 'You Lose! Paper beats rock.';
        l++;
      } else {
        return 'Tie!';
      }
    } else if (playerSelection.toLowerCase() === 'paper') {
      if (computerSelection === 'rock') {
        return 'You Win! Paper beats rock.';
        w++;
      } else if (computerSelection === 'scissors') {
        return 'You Lose! Scissors beats paper.';
        l++;
      } else {
        return 'Tie!';
      }
    } else if (playerSelection.toLowerCase() === 'scissors') {
      if (computerSelection === 'rock') {
        return 'You Lose! Rock beats scissors.';
        l++;
      } else if (computerSelection === 'paper') {
        return 'You Win! Scissors beats paper.';
        w++;
      } else {
        return 'Tie!';
      } 
    } else {
        alert('You did not enter a valid choice. Try again.');
        round--;
    }
  };
  
  // 5 rounds against the AI
  function game() {
    round = 0;
    while (round < 5) {
      playerSelection = prompt('Enter rock, paper, or scissors.');
      computerSelection = computerPlay();
      console.log(playRound(playerSelection,computerSelection));
      round++;
    }
    
    if (w > l) {
      return 'You Win the Game!';
    } else if (w < l) {
      return 'You Lose the Game!';
    } else {
      return 'It\'s a draw!';
    }
  };
  
  console.log(game());