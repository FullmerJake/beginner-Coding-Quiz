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


var questions = [
    {
        // First Question
        prompt: ,
        answer: 
    },
    {
        // Second Quesiton
        prompt: ,
        answer: 
    },
    {
        // Third Question
        prompt: ,
        answer:
    },
    {
        // Fourth Question
        prompt: ,
        answer: 
    },
    {
        // Fifth Question
        prompt: ,
        answer:
    }
];
var score = 0;
