let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
      };

      score.displayScore = function() {
        return `SCORECARD
        Won:${score.win}
        Lost:${score.lost} 
        Tie: ${score.tie}`;
      };

      showResult();
    }

    function generateComputerChoice() {
      //This will generate random number between 0 and 3
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Stone';
      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Scissors';
      } else {
        return 'Paper';
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Stone') {
        if (computerMove === 'Scissors') {
          score.win++;
          return 'You won.';
        } else if (computerMove === 'Stone') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Paper') {
          score.lost++;
          return 'Computer has won';
        }
      } else if (userMove === 'Scissors') {
        if (computerMove === 'Scissors') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Stone') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Paper') {
          score.win++;
          return 'You won.';
        }
      } else {
        if (computerMove === 'Scissors') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Stone') {
          score.win++;
          return 'You won.';
        } else if (computerMove === 'Paper') {
          score.tie++;
          return `It's a tie`;
        }
      }
    }

    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score', JSON.stringify(score));
      
      document.querySelector('#user-move').innerText = 
        userMove ? `You have chosen ${userMove}` : '';
      
      document.querySelector('#computer-move').innerText =
        computerMove ? `Computer choice is ${computerMove}` : '';
      
      document.querySelector('#result').innerText = result || '';

      document.querySelector('#score').innerText = score.displayScore();
    }