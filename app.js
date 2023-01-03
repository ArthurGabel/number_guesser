let minNum = 1,
    maxNum = 10,
    winNum = getRandomNum(minNum, maxNum),
    guessesLeft = 3;

const UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIgame = document.querySelector('#game'),
      UIguessNum = document.querySelector('#guess-input'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UImessage = document.querySelector('.message');

UImin.textContent = minNum;
UImax.textContent = maxNum;

UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessNum.value);

  if(isNaN(guess) || guess < minNum || guess > maxNum) {
    setMessage(`Please enter a number betwin ${minNum} and ${maxNum}`, 'red');
  } else {

    if(guess === winNum) {
      gameOver(true, `${guess} is correct, YOU WIN!`);
    } else {
      guessesLeft -= 1;
      
      if(guessesLeft === 0) {
        gameOver(false, `GAME OVER, you lose... the correct number was ${winNum}`);
      } else {
        setMessage(`${guess} is wrong, TRY AGAIN!..${guessesLeft} guesses left.`, 'red');
      }
    };
  };
});

function getRandomNum(minNum, maxNum){
  return Math.floor(Math.random() * (maxNum - minNum + 1)+ minNum);
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  UIguessNum.disabled = true;
  UIguessNum.style.borderColor = color;
  UImessage.textContent = msg;
  UImessage.style.color = color;
  UIguessBtn.value = 'Play Again!'
  UIguessBtn.addEventListener('click', function(){
    document.location.reload();
  });
};

function setMessage(message, color) {
  UImessage.textContent = message;
  UImessage.style.color = color;
  UIguessNum.value = '';
};