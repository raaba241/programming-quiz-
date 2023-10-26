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
        
    }
]

var startButtonEl = document.getElementById("startQuizBtn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var questionCounter = 0;
var answerEl = document.getElementById("answers");
var paraEl = document.getElementById("info")
var maxTime = 75;

// function that occurs after pressing start button 
startButtonEl.addEventListener('click', function(){ 
  quizLoader()
  setInterval(() => {
    maxTime--;
    timerEl.innerText = maxTime;
  }, 1000);
}); 


// Loads the quiz

function quizLoader (){
    // If counter is less than the amount of questions, it'll create new elements in html and assign the values according to the counter

    if (questionCounter < quizQNA.length){
        questionEl.innerHTML = quizQNA[questionCounter].question;
        paraEl.innerHTML = "";
        answerEl.innerHTML = "<button id='answer1'></button><button id='answer2'></button><button id='answer3'></button><button id='answer4'></button>";
        var a_ans = document.getElementById ("answer1")
        a_ans.innerText = quizQNA[questionCounter].a
        var b_ans = document.getElementById ("answer2")
        b_ans.innerText = quizQNA[questionCounter].b
        var c_ans = document.getElementById ("answer3")
        c_ans.innerText = quizQNA[questionCounter].c
        var d_ans = document.getElementById ("answer4")
        d_ans.innerText = quizQNA[questionCounter].d
        
        // if a button is clicked, it'll move on to the next question

        a_ans.addEventListener('click',function(){
            questionCounter++;
            quizLoader();
        })
        b_ans.addEventListener('click',function(){
            questionCounter++;
            quizLoader();
        })
        c_ans.addEventListener('click',function(){
            questionCounter++;
            quizLoader();
        })
        d_ans.addEventListener('click',function(){
            questionCounter++;
            quizLoader();
        })
    }     

}