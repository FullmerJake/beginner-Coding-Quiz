// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');
// var startBtn = document.getElementById('start');

// var message =
//   'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
// var words = message.split(' ');

// // Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function() {
   
//     if (timeLeft > 0) {
//         timerEl.textContent = timeLeft + ' time left.';
//         timeLeft--;
//     }
//     else if (timeLeft === 0){
//         displayMessage();
//         timeLeft--;
//     }
//     else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//     }
    
//   }, 1000);
  
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
//   var msgInterval = setInterval(function() {
//     if (words[wordCount] === undefined) {
//       clearInterval(msgInterval);
//     } else {
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 300);
// }

// startBtn.onclick = countdown;

//creates an array of question objects.
var questions = [
    {
        // First Question
        prompt: "Which of the following is in charge of the styling of your webpage?",
        answer: 'a'
    },
    {
        // Second Quesiton
        prompt: "Which of the following affects the user's ability to dynamically interact with your webpage?",
        answer: 'a'
    },
    {
        // Third Question
        prompt: "What symbol do we use to notate something as a function?",
        answer: 'a'
    },
    {
        // Fourth Question
        prompt: "Which is the correct way to log something to the console?",
        answer: 'a'
    },
    {
        // Fifth Question
        prompt: "Did you have fun testing this code?",
        answer: 'a'
    }
];
var score = 0;
var startBtnEl = document.querySelector('#start');


var quizCycle = function() {
    for(var i = 0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if (response === questions[i].answer){
            score++;
            alert('correct');
        }
        else {
            alert('wrong');
        }
    }
}

alert('you got a score of ' + score);

startBtnEl.onclick = quizCycle;
