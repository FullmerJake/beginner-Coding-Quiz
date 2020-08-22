
var startBtnEl = document.querySelector('#start');


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

startBtnEl.onclick = quizCycle;


