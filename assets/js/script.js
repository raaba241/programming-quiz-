var quizQNA = [
    {
        question: "Commonly used data types DO NOT include?",
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers",
        correct: 'c'
    },
    {
        question: "The condition if an if/else statement is enclosed with ________.",
        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parenthesis",
        d: "4. square brackets",
        correct: 'c'
        
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        a: "1. number and strings",
        b: "2. other arrays",
        c: "3. booleans",
        d: "4. all of the above",
        correct: 'd'
        
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        a: "1. commas",
        b: "2. curly brackets",
        c: "3. quotes",
        d: "4. parenthesis",
        correct: 'c'
        
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "1. JavaScript",
        b: "2. terminal/bash",
        c: "3. for loops",
        d: "4. console.log",
        correct: 'd'
        
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "1. JavaScript",
        b: "2. terminal/bash",
        c: "3. for loops",
        d: "4. console.log",
        correct: 'd'
        
    }
]

var startButtonEl = document.getElementById("startQuizBtn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var questionCounter = 0;
var answerEl = document.getElementById("answers");
var paraEl = document.getElementById("info")

// function that occurs after pressing start button 
startButtonEl.addEventListener('click', function(){ 
    questionEl.innerHTML = quizQNA[questionCounter].question;
    paraEl.innerHTML = "";
    answerEl.innerHTML = "<button>Hi</button><button>Hi</button><button>Hi</button>";
    questionCounter++;
}); 


