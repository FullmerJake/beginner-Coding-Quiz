
var startBtnEl = document.querySelector('#start');
var btn0El = document.querySelector('#btn0');
var btn1El = document.querySelector('#btn1');
var btn2El = document.querySelector('#btn2');
var btn3El = document.querySelector('#btn3');
var choice0El = document.querySelector('#choice0');
var choice1El = document.querySelector('#choice1');
var choice2El = document.querySelector('#choice2');
var choice3El = document.querySelector('#choice3');
var questionEl = document.querySelector('#question');


//creates an array of question objects.
var questions = [
    {
        // First Question
        prompt: "Which of the following is in charge of the styling of your webpage?",
        answer1: 'HTML',
        answer2: 'Javascript',
        answer3: 'Java',
        answerTrue: 'CSS'
    },
    {
        // Second Quesiton
        prompt: "Which of the following affects the user's ability to dynamically interact with your webpage?",
        answer1: 'HTML3',
        answer2: 'HTML',
        answer3: 'CSS',
        answerTrue: 'Javascript'
    },
    {
        // Third Question
        prompt: "What symbol do we use to enter an arguement into a function?",
        answer1: '[]',
        answer2: '""',
        answer3: '{}',
        answerTrue: '()'
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

var score = 0;
var questionNumber = 0;

// Loads the First Question and possible answers to the page. 
var firstQuestion = function() {
    //creates a new H2 DOM element
    var question = document.createElement('div');
    //adds the prompt from the question object as HTML to the H2 element
    question.innerHTML = "<h2>" + questions[0].prompt + "</h2>";
    //pushes the question to the question DOM element, in this case, the premade div with #question
    questionEl.appendChild(question);

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
     question.innerHTML = "<h2>" + questions[1].prompt + "</h2>";
 
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
     question.innerHTML = "<h2>" + questions[2].prompt + "</h2>";
 
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
     question.innerHTML = "<h2>" + questions[3].prompt + "</h2>";
 
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
     question.innerHTML = "<h2>" + questions[4].prompt + "</h2>";
 
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

// Checks if the selected answer is correct 
var answerSelected = function(selectedBtn){
    var userAnswer = selectedBtn;
    if (userAnswer.classList.contains('correct-answer')){
        alert('Correct')
        score += 1;
        loadNextQuestion();
    }
    else {
        alert('Wrong');
        return;
    }
}
// checks the Question Number and proceeds to the next question.
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
    }
}

startBtnEl.addEventListener('click', firstQuestion);


// create timer
// When an answer is incorrect, subtract time from timer
// END Event triggers when all questions are answered, or timer hits 0
// Score Page is presented at END Event Trigger
// Saves score to localStorage, with User Input for Initials. 



