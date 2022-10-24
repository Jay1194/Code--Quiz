var startQuizEl = document.getElementById('btn');
var highScoresEl = document.getElementById('btn2');



//Counter 
var count = 60 
var countdown = function (){
(count);
count--;
if(count === 0){
alert("Your out of time!");
clearInterval(startCountdown);
};
};

var startCountdown = setInterval(countdown, 1000);
