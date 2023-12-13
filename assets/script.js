// timer
var timeEl = document.querySelector(".timer");
var secondsLeft = 75;

// questions + answers arrays - correct answers marked somehow

var myQuestions

//timer function

function setTimer() {
      // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

//quiz function - subtract time for wrong answers

// set high scores to save in local storage
setTimer();


