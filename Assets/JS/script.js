
document.getElementById("start-quiz").addEventListener("click", quizStart);

function quizStart() {

var count = 15
var countdown = function (){
(count);
count--;
if(count === 0){
alert("Your out of time!");
clearInterval(startCountdown);
};
};

var startCountdown = setInterval(countdown, 1000);



var questions = [
    {
        prompt: "Commonly used data types DO NOT include.\n(a) Strings\n\ (b) Bolleans\n (c) Alerts",
        answer: "c"
    },

    {
       prompt: "The condition in a IF / ELSE statemenmt is enclosed with_______.\n(a) Quotes\n\ (b) Curly Brackets\n (c) Parenthesis",
        answer: "b"
    },

    {
        prompt: "Arrays can be used to store_____.\n(a) other arrays\n\ (b) Local Storage\n (c) All of the above",
        answer: "c"
    },
] 

var highScore = 0;

for(var i=0; i < questions.length; i++){
    var response = prompt(questions[i].prompt)
    if(response == questions[i].answer){
        highScore++;
        alert("Correct Answer!");
    } else {
        alert("WRONG Answer!");
    }
}var intials = prompt("your intials");
alert( intials + " Score: " + highScore + "/" + questions.length);
};

