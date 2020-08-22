
var startBtnEl = document.querySelector('#start');
var btn0El = document.querySelector('#btn0');
var btn1El = document.querySelector('#btn1');
var btn2El = document.querySelector('#btn2');
var btn3El = document.querySelector('#btn3');
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
        answer1: 'JavaScript',
        answer2: 'HTML',
        answer3: 'CSS',
        answerTrue: 'HTML3'
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

var firstQuestion = function() {
    //creates a new H2 DOM element
    var question = document.createElement('h2');
    //adds the prompt from the question object as HTML to the H2 element
    question.innerHTML = "<h2>" + questions[0].prompt + "</h2>";
    //pushes the question to the question DOM element, in this case, the premade div with #question
    questionEl.appendChild(question);

}
var secondQuestion = function() {
    
}
var thirdQuestion = function() {
    
}
var fourthQuestion = function() {
    
}
var fifthQuestion = function() {
    
}

startBtnEl.addEventListener('click', firstQuestion);

// 1. Create an Array of question objects
// 2. Display the Question and possible Answers in buttons
// 3. onClick will either return right or wrong, proceed to next question, and tally score
// 4. Ending one function then calls the next function

