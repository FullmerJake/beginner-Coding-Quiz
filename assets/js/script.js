// DOM Elements
var startBtnEl = document.querySelector('#start');
var timerEl = document.querySelector('#countdown');
var feedbackEl = document.querySelector('#feedback');
var questionContainerEl = document.querySelector('#questionContainer');
var questionEl = document.querySelector('#question');
var initialInputForm = document.querySelector('#initial-input');
var highScoreListEl = document.querySelector('#scores');
var btn0El = document.querySelector('#btn0');
var btn1El = document.querySelector('#btn1');
var btn2El = document.querySelector('#btn2');
var btn3El = document.querySelector('#btn3');
var choice0El = document.querySelector('#choice0');
var choice1El = document.querySelector('#choice1');
var choice2El = document.querySelector('#choice2');
var choice3El = document.querySelector('#choice3');

// Global Variables
var score = 0;
var questionNumber = 0;
var timeLeft;

// Question Object Array 
var questions = [
    {
        // First Question
        prompt: "Which method do we use in order to give localStorage a key and a value?",
        answer1: 'localStorage.GetItem(x,y)',
        answer2: 'localStorage.SetItem(x,y)',
        answer3: 'localstorage.GetItem(x)',
        answerTrue: 'localStorage.setItem(x,y)'
    },
    {
        // Second Quesiton
        prompt: "How do I create a DOM element of an element already on the HTML document?",
        answer1: 'element = document.querySelector()',
        answer2: 'var elementEl.CreateElement()',
        answer3: 'DOM var = ElementDOM = createEl()',
        answerTrue: 'var elementEl = document.querySelector(#)'
    },
    {
        // Third Question
        prompt: "What symbol do we use to enter an arguement into a function?",
        answer1: '[ ]',
        answer2: '" "',
        answer3: '{ }',
        answerTrue: '( )'
    },
    {
        // Fourth Question
        prompt: "Which is the correct way to log something to the console?",
        answer1: 'console.print();',
        answer2: 'console.log{};',
        answer3: 'Console.Log();',
        answerTrue: 'console.log();'
    },
    {
        // Fifth Question
        prompt: "Did you have fun testing this code?",
        answer1: 'Yes',
        answer2: 'Absolutely',
        answer3: 'For Sure',
        answerTrue: 'Of Course Not'
    }
];

// Loads the First Question and possible answers to the page. 
var firstQuestion = function() {
    // Hides Start Btn
    startBtnEl.style.display = 'none';
    btn0El.style.display = 'initial';
    btn1El.style.display = 'initial';
    btn2El.style.display = 'initial';
    btn3El.style.display = 'initial';
    //starts timer
    countdown();

    questionEl.textContent = questions[0].prompt;

    // First Answer
    choice0El.innerHTML = questions[0].answer1;
    
    // Second Answer
    choice1El.innerHTML = questions[0].answerTrue;
    btn1El.className = 'correct-answer';
    
    // Third Answer
    choice2El.innerHTML = questions[0].answer2;
    
    // Fourth Answer
    choice3El.innerHTML = questions[0].answer3;

    // Logs the correct answer into a variable
    questionAnswerTrue = questions[0].answerTrue;

    questionNumber++;
}
var secondQuestion = function() {

     //adds the prompt from the question object as HTML to the H2 element
     questionEl.textContent = questions[1].prompt;
 
     // First Answer
     choice0El.innerHTML = questions[1].answer3;
     
     // Second Answer
     choice1El.innerHTML = questions[1].answer2;
     btn1El.classList.remove('correct-answer');
     
     // Third Answer
     choice2El.innerHTML = questions[1].answer1;
     
     // Fourth Answer
     choice3El.innerHTML = questions[1].answerTrue;
     btn3El.className = 'correct-answer'
 
     // Logs the correct answer into a variable
     questionAnswerTrue = questions[1].answerTrue;

     questionNumber++;
}
var thirdQuestion = function() {

     //adds the prompt from the question object as HTML to the H2 element
     questionEl.textContent = questions[2].prompt;
 
     // First Answer
     choice0El.innerHTML = questions[2].answerTrue;
     btn0El.className = 'correct-answer';
     // Second Answer
     choice1El.innerHTML = questions[2].answer2;
     
     // Third Answer
     choice2El.innerHTML = questions[2].answer1;
     
     // Fourth Answer
     choice3El.innerHTML = questions[2].answer3;
     btn3El.classList.remove('correct-answer');

     questionNumber++;
}
var fourthQuestion = function() {

     //adds the prompt from the question object as HTML to the H2 element
     questionEl.textContent = questions[3].prompt;
 
     // First Answer
     choice0El.innerHTML = questions[3].answer3;
     btn0El.classList.remove('correct-answer');
     // Second Answer
     choice1El.innerHTML = questions[3].answerTrue;
     btn1El.className = 'correct-answer';
     // Third Answer
     choice2El.innerHTML = questions[3].answer1;
     
     // Fourth Answer
     choice3El.innerHTML = questions[3].answer2;


     questionNumber++;
}
var fifthQuestion = function() {

     //adds the prompt from the question object as HTML to the H2 element
     questionEl.textContent = questions[4].prompt;
 
     // First Answer
     choice0El.innerHTML = questions[4].answer3;
     // Second Answer
     choice1El.innerHTML = questions[4].answer2;
     btn1El.classList.remove('correct-answer');

     // Third Answer
     choice2El.innerHTML = questions[4].answerTrue;
     btn2El.className = 'correct-answer';

     // Fourth Answer
     choice3El.innerHTML = questions[4].answer1;
 

     questionNumber++;
}
// Checks what the user selected, and if it is the correct answer where applicable
var answerSelected = function(selectedBtn){
    var userAnswer = selectedBtn;
    if (userAnswer.classList.contains('correct-answer')){
        feedbackEl.textContent = 'Correct!';
        score += 1;
        loadNextQuestion();
    }
    //checks if the submit button was pressed.
    else if (userAnswer.classList.contains('submit')){
        enterHighScore();
    }
    //checks if the restart button was pressed.
    else if (userAnswer.classList.contains('restart')){
        restart();
    }
    else {
        feedbackEl.textContent = 'Wrong!';
        // wrong answer subtracts 5 seconds from the timer. 
        timeLeft = timeLeft - 10;
        loadNextQuestion();
    }
}
// checks the Question Number and proceeds to the next Question Object.
var loadNextQuestion = function(){
    switch(questionNumber){
        case 1:
            secondQuestion();
        break;
        case 2:
            thirdQuestion();
        break;
        case 3:
            fourthQuestion();
        break;
        case 4:
            fifthQuestion();
        break;
        // if there are no questions left, load end scene
        default:
            timeLeft = 0;
        break;
    }
}
// Loads Initial entering scene
var enterScores = function(){
    btn2El.classList.remove('correct-answer');
    questionEl.textContent = "Your Score is " + score + "! Please Enter Your Initials Below";
    initialInputForm.style.display = 'initial';
    // Hides and changes buttons to Submit and Restart Buttons
    btn0El.className = 'submit';
    choice0El.innerHTML = 'Submit';
    btn1El.className = 'restart';
    choice1El.innerHTML = 'Restart';
    btn2El.style.display = 'none';
    btn3El.style.display = 'none';
    // Makes feedback disappear.
    setInterval(function(){
        feedbackEl.textContent = '';
    }, 3000);
}
// Resets Styling and Quiz
var restart = function() {
    // Brings the StartBtn back.
    startBtnEl.style.display = 'initial';

    // Hides remaining btns for start page
    btn0El.style.display = 'none';
    btn1El.style.display = 'none';
    initialInputForm.value = '';
    initialInputForm.style.display = 'none';
    highScoreListEl.innerHTML = '';
    
    // resets Btn labels to 0.
    questionEl.textContent = 'Are You Ready to Start?';
    choice0El.textContent = '';
    choice1El.textContent = '';
    choice2El.textContent = '';
    choice3El.textContent = '';
    
    // reset variables to 0
    score = 0;
    questionNumber = 0;

    // deletes submit and restart class from buttons for restart.
    btn0El.classList.remove('submit');
    btn1El.classList.remove('restart');
}
// Enters Score into localStorage
var enterHighScore = function() {
    // Get Initials
    var inputVal = initialInputForm.value;
    if (!inputVal){
        alert('You Need to Enter an Initial');
    }
    else {
        localStorage.setItem(inputVal, score);
        displayHighScore();
        btn0El.style.display = 'none';
        initialInputForm.style.display = 'none';
    }
}
// Checks Local Storage, Displays all other Scores
var displayHighScore = function(){
    questionEl.textContent = "High Scores!";
    for (var i = 0; i < localStorage.length; i++){
        var storedScore = document.createElement('li');
        var key = localStorage.key(i);
        var value = localStorage[key];
        storedScore.textContent = key + ": " + value + " pts";
        highScoreListEl.appendChild(storedScore);
    };
}
// Timer that counts down from 60
function countdown() {
    timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft + ' time remaining';
        timeLeft--;
      } 
      else if (timeLeft === 0){
        timerEl.textContent = '';
        clearInterval(timeInterval);
        enterScores();
      }
    }, 1000);
  }
// initializes Start Page
initialInputForm.style.display = 'none';
btn0El.style.display = 'none';
btn1El.style.display = 'none';
btn2El.style.display = 'none';
btn3El.style.display = 'none';

// Starts the Quiz
startBtnEl.addEventListener('click', firstQuestion);



